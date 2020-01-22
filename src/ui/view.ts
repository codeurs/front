import {ChildrenType} from '../hyperscript'
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

export abstract class View<
	Attrs = {},
	State extends {} = {},
	Dom extends Element = Element
> implements ClassComponent<Attrs> {
	attrs!: Readonly<{children?: Children}> & Readonly<Attrs>
	state?: Readonly<State>
	dom: undefined | Dom

	constructor(vnode: CVnode<Attrs>) {
		this.__update(vnode as Vnode<Attrs, this>)
	}

	get children(): ChildrenType<Attrs> {
		return this.attrs.children as ChildrenType<Attrs>
	}

	// Public API

	onInit() {}
	onCreate(dom: Dom) {}
	onUpdate(dom: Dom) {}
	onBeforeRemove(dom: Dom): void | Promise<any> {}
	onRemove() {}
	onBeforeUpdate(attrs: Attrs): void | boolean {}
	abstract render(): Children | null | void

	// Future (p)react connection

	setState<K extends keyof State>(
		state:
			| ((
					prevState: Readonly<State> | undefined,
					attrs: Readonly<{children?: Children}> & Readonly<Attrs>
			  ) => Pick<State, K> | State | null)
			| (Pick<State, K> | State | null),
		callback?: () => void
	) {
		if (state === null) return
		if (typeof state === 'function')
			Object.assign(this.state, (state as any)(this.state, this.attrs))
		else Object.assign(this.state, state)
		if (callback) callback()
	}

	// Mithril connection

	/** @internal */
	oninit(vnode: Vnode<Attrs, this>) {
		this.__update(vnode)
		return this.onInit()
	}

	/** @internal */
	oncreate(vnode: VnodeDOM<Attrs, this>) {
		this.__update(vnode)
		return this.onCreate(vnode.dom as Dom)
	}

	/** @internal */
	onupdate(vnode: VnodeDOM<Attrs, this>) {
		this.__update(vnode)
		return this.onUpdate(vnode.dom as Dom)
	}

	/** @internal */
	onbeforeremove(vnode: VnodeDOM<Attrs, this>) {
		this.__update(vnode)
		return this.onBeforeRemove(vnode.dom as Dom)
	}

	/** @internal */
	onremove(vnode: VnodeDOM<Attrs, this>) {
		this.__update(vnode)
		return this.onRemove()
	}

	/** @internal */
	onbeforeupdate(vnode: Vnode<Attrs, this>, old: CVnodeDOM<Attrs>) {
		this.__update(vnode)
		return this.onBeforeUpdate(old.attrs)
	}

	view(vnode: Vnode<Attrs, this>) {
		return this.render()
	}

	/** @internal */
	__update(vnode: Vnode<Attrs, this> | VnodeDOM<Attrs, this>) {
		if ('dom' in vnode && vnode.dom) this.dom = vnode.dom as Dom
		this.attrs = {
			...vnode.attrs,
			children: extractChildren(vnode.children)
		}
	}
}
