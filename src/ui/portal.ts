import m from 'mithril'
import {View} from './view'

export class Portal extends View {
	node = document.createElement('div')

	onCreate() {
		document.body.appendChild(this.node)
		m.mount(this.node, {view: () => this.children})
	}

	onRemove() {
		m.mount(this.node, {view: () => null})
		document.body.removeChild(this.node)
	}

	render() {
		return null
	}
}
