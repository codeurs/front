import {
	Children,
	ClassComponent,
	CVnode,
	CVnodeDOM,
	Vnode,
	VnodeDOM
} from 'mithril'
import {extractChildren} from '../util/children'

declare global {
	namespace JSX {
		interface ElementAttributesProperty {
			attrs: {}
		}
		interface ElementChildrenAttribute {
			children: {}
		}
	}
}

export type StatelessView<Attr = {}> = {
	(attr: {children?: Children} & Attr): Children
}

export abstract class View<Attr = {}, Dom extends Element = Element>
	implements ClassComponent<Attr> {
	attrs!: Readonly<{children?: Children}> & Readonly<Attr>
	dom: undefined | Dom

	constructor(vnode: CVnode<Attr>) {
		this.__update(vnode as Vnode<Attr, this>)
	}

	get children() {
		return this.attrs.children
	}

	// Public API

	onInit() {}
	onCreate(dom: Dom) {}
	onUpdate(dom: Dom) {}
	onBeforeRemove(dom: Dom): void | Promise<any> {}
	onRemove() {}
	onBeforeUpdate(attrs: Attr): void | boolean {}
	abstract render(): Children | null | void

	// Mithril connection

	/** @internal */
	oninit(vnode: Vnode<Attr, this>) {
		this.__update(vnode)
		return this.onInit()
	}

	/** @internal */
	oncreate(vnode: VnodeDOM<Attr, this>) {
		this.__update(vnode)
		return this.onCreate(vnode.dom as Dom)
	}

	/** @internal */
	onupdate(vnode: VnodeDOM<Attr, this>) {
		this.__update(vnode)
		return this.onUpdate(vnode.dom as Dom)
	}

	/** @internal */
	onbeforeremove(vnode: VnodeDOM<Attr, this>) {
		this.__update(vnode)
		return this.onBeforeRemove(vnode.dom as Dom)
	}

	/** @internal */
	onremove(vnode: VnodeDOM<Attr, this>) {
		this.__update(vnode)
		return this.onRemove()
	}

	/** @internal */
	onbeforeupdate(vnode: Vnode<Attr, this>, old: CVnodeDOM<Attr>) {
		this.__update(vnode)
		return this.onBeforeUpdate(old.attrs)
	}

	view(vnode: Vnode<Attr, this>) {
		return this.render()
	}

	/** @internal */
	__update(vnode: Vnode<Attr, this> | VnodeDOM<Attr, this>) {
		if ('dom' in vnode && vnode.dom) this.dom = vnode.dom as Dom
		this.attrs = {
			...vnode.attrs,
			children: extractChildren(vnode.children)
		}
	}
}
