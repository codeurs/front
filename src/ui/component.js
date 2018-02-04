export class Component {
	constructor(vnode) {
		this.attrs = vnode.attrs
	}

	oninit(vnode) {
		this.patch(this.update, 'oncreate', 'onupdate', 'view')
	}

	patch(to, ...methods) {
		const comp = this
		methods.forEach(method => {
			const original = comp[method] ? comp[method].bind(comp) : null
			comp[method] = (...args) => {
				return to.apply(comp, args.concat(original))
			}
		})
	}

	update(vnode, original) {
		this.attrs = vnode.attrs
		this.dom = vnode.dom
		this.children = vnode.children
		this.onafterupdate()
		if (original) return original(vnode)
	}

	onafterupdate() {}

	view(vnode) {
		throw 'assert'
	}
}