import m from 'mithril'
import {Component} from './component'
import classnames from 'classnames'
import {getResizedUrl} from './picture'

import './background.less'

export class Background extends Component {
	showing = null

	src() {
		const {img} = this.attrs
		return typeof img === 'string' ? img : img.src
	}

	oncreate() {
		const {img} = this.attrs
		const src = this.src()
		this.showing = src
		if (!src || img.empty) return
		const {style} = this.dom
		const url = getResizedUrl(src, this.dom.offsetWidth, this.dom.offsetHeight)
		style.backgroundImage = `url('${url}')`
		if (img.focus)
			style.backgroundPosition = `${img.focus.x * 100}% ${img.focus.y * 100}%`
	}

	onupdate(vnode) {
		const src = this.src()
		if (this.showing !== src) this.oncreate(vnode)
	}

	view() {
		const {img, ...attrs} = this.attrs
		return m('.background',
			{
				key: this.src(),
				...attrs
			},
			this.chilren
		)
	}
}
