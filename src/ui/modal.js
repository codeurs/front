import m from 'mithril'
import {Component} from './component'
import {subComponent} from '../util/subcomponent'
import lockScroll from '../util/lockscroll'
import {classes} from '../util/classes'

export const ModalOverlay = subComponent('.modal-overlay')

import './modal.less'
export class Modal extends Component {
  opened = false
  oncreate = this.lock
  onupdate = this.lock
  
  lock() {
    const {isOpen, open, close} = this.attrs
    lockScroll(isOpen)
    if (this.opened === isOpen) return
    if (isOpen) window.addEventListener('keydown', this.closeByKey)
    else window.removeEventListener('keydown', this.closeByKey)
    this.opened = isOpen
  }

  onremove() {
    window.removeEventListener('keydown', this.closeByKey)
  }

  closeByKey = e => {
    const {close} = this.attrs
    if (e.keyCode !== 27) return
    close()
    m.redraw()
  }

  view() {
    const {isOpen, close, zIndex = 1000, mod} = this.attrs
    if (!isOpen) return null
    return m('.modal', {
      oncreate: ({dom}) => setTimeout(() => {
        dom.classList.add('is-open')
      }, 25),
      onbeforeremove: ({dom}) => new Promise(done => {
        dom.addEventListener('transitionend', done, false, {once: true})
        dom.classList.remove('is-open')
      }),
      ...classes({mod}),
      style: {zIndex}
    }, m('.modal-container', {
      onclick: ({target}) => {
        if (target && target.classList.contains('modal-container'))
          close()
      }
    }, 
      m('.modal-container-content', this.children)
    ))
  }
}
