import {Children, ClassComponent, CVnode, CVnodeDOM} from 'mithril'
import {extractChildren} from '../util/children'

declare var process: {env: {NODE_ENV: string}}

export class Component<Attr = {}, El = Element>
	implements ClassComponent<Attr> {
	// Following are references to properties on mithril's vnode
	attrs: Attr
	dom!: El
	children: Children

	constructor(vnode: CVnode<Attr>) {
		this.attrs = vnode.attrs
	}

	oninit(vnode: CVnode<Attr>) {
		this.patch(this.update, 'oncreate', 'onupdate', 'view')
	}

	onbeforeupdate(vnode: CVnode<Attr>, old: CVnodeDOM<Attr>) {
		return true
	}

	patch(to: any, ...methods: Array<string>) {
		const comp: any = this
		methods.forEach(method => {
			const original = comp[method] && comp[method].bind(comp)
			comp[method] = (...args: Array<any>) => {
				return to.apply(comp, args.concat(original))
			}
		})
	}

	update(vnode: CVnodeDOM<Attr>, original?: any) {
		this.attrs = vnode.attrs
		if (vnode.dom) this.dom = vnode.dom as any
		this.children = extractChildren(vnode.children)
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
