import m from 'mithril'
import {Component} from './component'

export class Portal extends Component {
	node = document.createElement('div')

	onCreate() {
		document.body.appendChild(this.node)
		m.mount(this.node, {
			view: () => this.children
		})
	}

	onRemove() {
		m.mount(this.node, null)
		document.body.removeChild(this.node)
	}

	render() {
		return null
	}
}
