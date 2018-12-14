import m, {Component as MithrilComponent, CVnode, Children} from 'mithril'
import redrawApi from 'mithril/redraw'

// Type signature is incomplete
const redrawService = redrawApi as any

export class View<Attr = {}, Dom = Element> implements MithrilComponent<Attr> {
	attrs: Readonly<{children?: Children}> & Readonly<Attr>
	private __root: any = document.createDocumentFragment()

	constructor(vnode: CVnode<Attr>) {
		this.__update(vnode)
	}

	get dom(): Dom {
		const vnodes = (this.__root as any).vnodes
		if (vnodes.length === 0) return null
		if (vnodes.length === 1) return vnodes[0].dom
		return vnodes.map(vnode => vnode.dom)
	}

	get children() {
		return this.attrs.children
	}

	// Public API

	onInit() {}
	onCreate() {}
	onUpdate() {}
	onBeforeRemove(): PromiseLike<any> {
		return
	}
	onRemove() {}
	onBeforeUpdate(attrs: Attr): void | boolean {}
	render(): Children {
		throw 'implement'
	}

	redraw(event?) {
		if (event) event.redraw = false
		redrawService.render(this.__root, this.render())
	}

	oninit = vnode => (this.__update(vnode), this.onInit())
	oncreate = vnode => {
		this.__update(vnode)
		this.redraw()
		redrawService.subscribe(this.__root, m.redraw)
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
	onbeforeupdate = (_, vnode) => this.onBeforeUpdate(vnode.attrs)
	view() {
		return ''
	}

	private __remove = () => {
		this.__root.vnodes.forEach(vnode => vnode.dom.remove())
		redrawService.unsubscribe(this.__root, m.redraw)
	}

	private __update(vnode) {
		this.attrs = {
			...vnode.attrs,
			children:
				vnode.children &&
				vnode.children[0] &&
				typeof vnode.children[0].children == 'function'
					? vnode.children[0].children
					: vnode.children
		}
	}
}
