import './modal.less'

import {DOMAttrs, m} from '../hyperscript'
import {classes} from '../util/classes'
import lockScroll from '../util/lockscroll'
import {View} from './view'

export class ModalOverlay extends View<DOMAttrs> {
	render() {
		return (
			<div className="modal-overlay" {...this.attrs}>
				{this.children}
			</div>
		)
	}
}

export class Modal extends View<{
	isOpen: boolean
	close: () => void
	zIndex?: number
	mod?: any
}> {
	render() {
		return null
	}
	/*opened = false
	oncreate = this.lock
	onupdate = this.lock

	lock() {
		const {isOpen, close} = this.attrs
		if (this.opened === isOpen) return
		if (isOpen) window.addEventListener('keydown', this.closeByKey)
		else window.removeEventListener('keydown', this.closeByKey)
		this.opened = isOpen
	}

	onRemove() {
		window.removeEventListener('keydown', this.closeByKey)
	}

	closeByKey = (e: KeyboardEvent) => {
		const {close} = this.attrs
		if (e.keyCode !== 27) return
		close()
	}

	render() {
		const {isOpen, close, zIndex = 1000, mod} = this.attrs
		if (!isOpen) return null
		return <div class="modal"></div>
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
	}*/
}
