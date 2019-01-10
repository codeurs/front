import {m, mount} from 'mithril-es'
import {View} from './view'

export class Portal extends View {
	node = document.createElement('div')

	onCreate() {
		document.body.appendChild(this.node)
		mount(this.node, {view: () => this.children})
	}

	onRemove() {
		mount(this.node, {view: () => null})
		document.body.removeChild(this.node)
	}

	view() {
		return null
	}
}
