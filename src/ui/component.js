export class Component {
	constructor(vnode) {
		this.attrs = vnode.attrs
	}

	oninit(vnode) {
		['oncreate', 'onupdate', 'view'].forEach(method => {
			const original = this[method] ? this[method].bind(this) : null
			this[method] = vnode => {
				this.update(method, vnode)
				if (original) return original(vnode)
			}
		})
	}

	update(method, vnode) {
		this.attrs = vnode.attrs
		this.dom = vnode.dom
		this.children = vnode.children
		this.onafterupdate()
	}

	onafterupdate() {}

	view(vnode) {
		throw 'assert'
	}
}