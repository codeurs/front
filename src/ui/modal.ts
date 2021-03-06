import './modal.less'

import {DOMAttrs} from '../hyperscript'
import m from 'mithril'
import {classes} from '../util/classes'
import lockScroll from '../util/lockscroll'
import {Component} from './component'

export class ModalOverlay extends Component<DOMAttrs> {
	view() {
		return m('.modal-overlay', this.attrs, this.children)
	}
}

export class Modal extends Component<{
	isOpen: boolean
	close: () => void
	zIndex?: number
	mod?: any
}> {
	opened = false
	oncreate = this.lock
	onupdate = this.lock

	lock() {
		const {isOpen, close} = this.attrs
		if (this.opened === isOpen) return
		if (isOpen) window.addEventListener('keydown', this.closeByKey)
		else window.removeEventListener('keydown', this.closeByKey)
		this.opened = isOpen
	}

	onremove() {
		window.removeEventListener('keydown', this.closeByKey)
	}

	closeByKey = (e: KeyboardEvent) => {
		const {close} = this.attrs
		if (e.keyCode !== 27) return
		close()
		m.redraw()
	}

	view() {
		const {isOpen, close, zIndex = 1000, mod} = this.attrs
		if (!isOpen) return null
		return m('.modal',
			{
				oncreate: ({dom}) =>
					setTimeout(() => {
						lockScroll(true)
						dom.classList.add('is-open')
					}, 25),
				onbeforeremove: ({dom}) =>
					new Promise(done => {
						;(dom as any).addEventListener(
							'transitionend',
							() => {
								lockScroll(false)
								done()
							},
							false,
							{once: true}
						)
						dom.classList.remove('is-open')
					}),
				onremove: () => lockScroll(false),
				...classes({mod}),
				style: {zIndex}
			},
			m('.modal-container',
				{
					onclick: (e: MouseEvent) => {
						const target = e.target as HTMLElement
						if (target && target.classList.contains('modal-container')) close()
					}
				},
				m('.modal-container-content', this.children)
			)
		)
	}
}
