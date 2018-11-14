import m from 'mithril'
import {Component} from './component'
import redrawApi from 'mithril/redraw'

// Type signature is incomplete
const redrawService = redrawApi as any

export class Portal extends Component {
	node = document.createElement('div')

	oncreate(vnode) {
		document.body.appendChild(this.node)
		redrawService.subscribe(this.node, m.redraw)
		const comp = this as any
		comp.onupdate(vnode)
	}

	onupdate() {
		redrawService.render(this.node, this.children)
	}

	onremove() {
		redrawService.render(this.node, [])
		redrawService.unsubscribe(this.node)
		document.body.removeChild(this.node)
	}

	view() {
		return null
	}
}