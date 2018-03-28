import m from 'mithril'
import {Component} from './component'

export class Page extends Component {
	currentRoute = null

	constructor(vnode) {
		super(vnode)
		this.currentRoute = this.attrs.route
	}

	oninit(vnode) {
		super.oninit(vnode)
		this.onroutechange()
	}

	onafterupdate() {
		this.currentRoute = this.attrs.route
	}

	onbeforeupdate = (vnode, old) => {
		this.currentRoute = vnode.attrs.route
		if (vnode.attrs.route.href !== old.attrs.route.href)
			this.onroutechange()
		return true
	}

	onroutechange() {}

	static render(attrs) {
		return m(this, attrs)
	}
}
