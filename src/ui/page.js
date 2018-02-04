import m from 'mithril'
import {Component} from './component'

export class Page extends Component {
	currentRoute = null

	constructor(vnode) {
		super(vnode)
		this.currentRoute = this.attrs.route
	}

	onafterupdate() {
		this.currentRoute = this.attrs.route
	}

	static render(attrs) {
		return m(this, attrs)
	}
}
