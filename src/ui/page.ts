import m from 'mithril'
import {Component} from './component'

export class Page extends Component<{
	route: {
		href: string
		path: string
		params: {}
	}
}> {
	currentRoute = null

	constructor(vnode) {
		super(vnode)
		this.currentRoute = this.attrs.route
	}

	onInit() {
		this.onroutechange()
	}

	onUpdate() {
		const last = this.currentRoute.href
		this.currentRoute = this.attrs.route
		if (last !== this.currentRoute.href) this.onroutechange()
	}

	onroutechange() {}

	static render(attrs) {
		return m(this, attrs)
	}
}
