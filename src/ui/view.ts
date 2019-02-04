import m, {Component, CVnode, CVnodeDOM, Children} from 'mithril'
import {extractChildren} from '../util/children'

declare global {
	namespace JSX {
		interface ElementAttributesProperty {
			attrs
		}
		interface ElementChildrenAttribute {
			children: {}
		}
	}
}

export abstract class View<Attr = {}, Dom extends Element = Element>
	implements Component<Attr> {
	attrs: Readonly<{children?: Children}> & Readonly<Attr>
	dom: Dom

	constructor(vnode: CVnode<Attr>) {
		this.__update(vnode)
	}

	get children() {
		return this.attrs.children
	}

	// Public API

	onInit() {}
	onCreate() {}
	onUpdate() {}
	onBeforeRemove(): void | Promise<any> {}
	onRemove() {}
	onBeforeUpdate(attrs: Attr): void | boolean {}
	abstract render(): Children

	/*protected redraw(e?) {
		if (e) e.redraw = false
		const view = this.view()
		if (Array.isArray(view)) m.redraw()
		else this.dom && m.render(this.dom, this.view())
	}*/

	// Mithril connection

	// Cannot mark view as internal because that wouldn't match mithril externs.
	// Method is stubbed because we might need it later on to bypass mithril
	// error handling.
	view(): Children {
		return this.render()
	}

	/** @internal */
	oninit(vnode: CVnode<Attr>) {
		this.__update(vnode)
		return this.onInit()
	}

	/** @internal */
	oncreate(vnode: CVnodeDOM<Attr>) {
		this.__update(vnode)
		return this.onCreate()
	}

	/** @internal */
	onupdate(vnode: CVnodeDOM<Attr>) {
		this.__update(vnode)
		return this.onUpdate()
	}

	/** @internal */
	onbeforeremove(vnode: CVnodeDOM<Attr>) {
		this.__update(vnode)
		return this.onBeforeRemove()
	}

	/** @internal */
	onremove(vnode: CVnodeDOM<Attr>) {
		this.__update(vnode)
		return this.onRemove()
	}

	/** @internal */
	onbeforeupdate(vnode: CVnodeDOM<Attr>, old: CVnodeDOM<Attr>) {
		this.__update(vnode)
		return this.onBeforeUpdate(old.attrs)
	}

	/** @internal */
	private __update(vnode: CVnode<Attr> | CVnodeDOM<Attr>) {
		if ('dom' in vnode) this.dom = vnode.dom as Dom
		this.attrs = {
			...vnode.attrs,
			children: extractChildren(vnode.children)
		}
	}
}
