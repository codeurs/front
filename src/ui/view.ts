import {Component, CVnode, CVnodeDOM, Children} from 'mithril'

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

export class View<Attr = {}, Dom extends Element = Element>
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
	render(attrs: Attr): Children {
		throw 'implement'
	}

	// Mithril connection

	oninit(vnode: CVnode<Attr>) {
		this.__update(vnode)
		return this.onInit()
	}
	oncreate(vnode: CVnodeDOM<Attr>) {
		this.__update(vnode)
		return this.onCreate()
	}
	onupdate(vnode: CVnodeDOM<Attr>) {
		this.__update(vnode)
		return this.onUpdate()
	}
	onbeforeremove(vnode: CVnodeDOM<Attr>) {
		this.__update(vnode)
		return this.onBeforeRemove()
	}
	onremove(vnode: CVnodeDOM<Attr>) {
		this.__update(vnode)
		return this.onRemove()
	}
	onbeforeupdate(_: CVnodeDOM<Attr>, vnode: CVnodeDOM<Attr>) {
		return this.onBeforeUpdate(vnode.attrs)
	}
	view(vnode: CVnodeDOM<Attr>) {
		this.__update(vnode)
		return this.render(this.attrs)
	}

	private __update(vnode: CVnode<Attr> | CVnodeDOM<Attr>) {
		if ('dom' in vnode) this.dom = vnode.dom as Dom
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
