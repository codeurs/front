import {
	Component as MithrilComponent,
	CVnode,
	CVnodeDOM,
	Children
} from 'mithril'
import * as equal from 'fast-deep-equal'

declare var process: {env: {NODE_ENV: string}}

export class Component<Attr = {}, El = Element>
	implements MithrilComponent<Attr> {
	// Use pure to mark this component for optimization
	// Do not use this for components that hold internal state,
	// use impure child components, or need access to children
	pure = false
	// Following are references to properties on mithril's vnode
	attrs: Attr
	dom: El
	children: Children

	constructor(vnode: CVnode<Attr>) {
		this.attrs = vnode.attrs
	}

	oninit(_) {
		if (this.pure) this.patch(this.updatePure, 'oncreate', 'onupdate', 'view')
		else this.patch(this.update, 'oncreate', 'onupdate', 'view')
	}

	onbeforeupdate(vnode: CVnode<Attr>, old: CVnodeDOM<Attr>) {
		return !this.pure || !equal(vnode.attrs, old.attrs)
	}

	patch(to: any, ...methods: Array<string>) {
		const comp: any = this
		methods.forEach(method => {
			const original = comp[method] && comp[method].bind(comp)
			comp[method] = (...args) => {
				return to.apply(comp, args.concat(original))
			}
		})
	}

	update(vnode: CVnodeDOM<Attr>, original?: any) {
		this.attrs = vnode.attrs
		if (vnode.dom) this.dom = vnode.dom as any
		this.children = vnode.children
		this.onafterupdate()
		if (original) {
			if (process.env.NODE_ENV === 'production') {
				try {
					return original(vnode)
				} catch (e) {
					console.error(e)
					return null
				}
			} else {
				return original(vnode)
			}
		}
	}

	onafterupdate() {}

	updatePure(vnode: CVnodeDOM<Attr>, original?: any) {
		this.attrs = vnode.attrs
		this.dom = vnode.dom as any
		if (original) return original(vnode)
	}

	view(): Children {
		throw 'assert'
	}
}
