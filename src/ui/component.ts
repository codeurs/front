import {Component as MithrilComponent, CVnode, Children} from 'mithril'
import m from 'mithril'
import redrawApi from 'mithril/redraw'

// Type signature is incomplete
const redraw = redrawApi as any

export class Component<Attr = {}, Dom = Element>
	implements MithrilComponent<Attr> {
	attrs: Attr
	children: Children
	private __root = document.createDocumentFragment()

	constructor(vnode: CVnode<Attr>) {
		this.__update(vnode)
	}

	get dom(): Dom {
		const vnodes = (this.__root as any).vnodes
		if (vnodes.length === 0) return null
		if (vnodes.length === 1) return vnodes[0]
		return vnodes
	}

	// Public API

	onInit() {}
	onCreate() {}
	onUpdate() {}
	onBeforeRemove() {}
	onRemove() {}
	onBeforeUpdate(newVNode) {}
	render(): Children {
		throw 'implement'
	}

	redraw() {
		redraw.render(this.__root, this.render())
	}

	// Mithril connection
	/* Uncomment to test performance vs global redraws
	dom = null
	oninit = vnode => (this.__update(vnode), this.onInit())
	oncreate = vnode => (this.__update(vnode), this.onCreate())
	onupdate = vnode => (this.__update(vnode), this.onUpdate())
	onremove = vnode => this.onRemove()
	onbeforeremove = vnode => this.onBeforeRemove()
	onbeforeupdate = (_, vnode) => this.onBeforeUpdate(vnode)
	view() {
		return this.render()
	}*/

	oninit = vnode => (this.__update(vnode), this.onInit())
	oncreate = vnode => {
		this.__update(vnode)
		this.redraw()
		redraw.subscribe(this.__root, m.redraw)
		vnode.dom.parentNode.replaceChild(this.__root, vnode.dom)
		this.onCreate()
	}
	onupdate = vnode => {
		this.__update(vnode)
		this.redraw()
		this.onUpdate()
	}
	onbeforeremove = vnode =>
		Promise.resolve(this.onBeforeRemove()).then(this.__remove, this.__remove)
	onremove = vnode => this.onRemove()
	onbeforeupdate = (_, newVNode) => this.onBeforeUpdate(newVNode)
	view() {
		return ''
	}

	private __remove = () => {
		(this.__root as any).vnodes.forEach(vnode => vnode.dom.remove())
		redraw.unsubscribe(this.__root, m.redraw)
	}

	private __update(vnode) {
		this.attrs = vnode.attrs
		this.children = vnode.children
	}
}
