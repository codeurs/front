import m, {CVnode} from 'mithril'
import {Component} from '../ui/component'

type Route = {
	href: string
	path: string
	params: {}
}

export class Page<T = {}> extends Component<{route: Route} & T> {
	currentRoute: Route

	constructor(vnode: CVnode<{route: Route} & T>) {
		super(vnode)
		this.currentRoute = this.attrs.route
	}

	oninit(vnode: CVnode<{route: Route} & T>) {
		super.oninit(vnode)
		this.onroutechange()
	}

	onafterupdate() {
		const last = this.currentRoute.href
		this.currentRoute = this.attrs.route
		if (last !== this.currentRoute.href) this.onroutechange()
	}

	onroutechange() {}

	static render(attrs: any) {
		return m(this, attrs)
	}
}
