import './background.less'

import m from 'mithril'
import {Component} from './component'
import {getResizedUrl} from './picture'

export type Img = {
	src: string
	empty?: boolean
	focus?: {x: number; y: number}
}

export class Background extends Component<
	{
		img: string | Img
		class?: string
		[key: string]: any
	},
	HTMLDivElement
> {
	showing = null

	image(): Img {
		const {img} = this.attrs
		return typeof img === 'string' ? {src: img} : img
	}

	oncreate(vnode) {
		const img = this.image()
		if (!img.src || img.empty) return
		this.showing = img.src
		const {style} = this.dom
		const url = getResizedUrl(
			img.src,
			this.dom.offsetWidth,
			this.dom.offsetHeight
		)
		style.backgroundImage = `url('${url}')`
		if (img.focus)
			style.backgroundPosition = `${img.focus.x * 100}% ${img.focus.y * 100}%`
	}

	onupdate(vnode) {
		const img = this.image()
		if (this.showing !== img.src) this.oncreate(vnode)
	}

	view() {
		const {img, class: className, ...attrs} = this.attrs
		return m('.background',
			{
				key: this.image().src,
				className,
				...attrs
			},
			this.children
		)
	}
}
