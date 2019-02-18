import hyperscript, {
	Attributes,
	Children,
	ComponentTypes,
	CVnode,
	Lifecycle,
	Vnode
} from 'mithril'
import {View} from 'ui'
import {extractChildren} from './util/children'

export type ChildAttr<T> = {children: T} | {children?: T}

const mithrilStatic = {...hyperscript}

type Components<A> = ComponentTypes<A>

type ExtendedHyperscript = {
	(selector: string, ...children: Children[]): Vnode<any, any>
	(selector: string, attributes: Attributes, ...children: Children[]): Vnode<
		any,
		any
	>
	<Child>(
		component: (attrs: {children: Child} | {}) => Children,
		...args: Child[]
	): Vnode<{}>
	<Attrs, Child>(
		component: (attrs: ChildAttr<Child> & Attrs) => Children,
		attributes: Attrs & {key?: string | number},
		...args: Child[]
	): Vnode<Attrs>
	<Attrs, State, Child>(
		component:
			| Components<{children: Child} & Attrs>
			| Components<{children?: Child} & Attrs>,
		attributes: Attrs & Lifecycle<Attrs, State> & {key?: string | number},
		...args: Child[]
	): Vnode<Attrs, State>
	<Attrs, State, Child>(
		component: Components<{children: Child}> | Components<{children?: Child}>,
		...args: Array<Child>
	): Vnode<Attrs, State>
} & typeof mithrilStatic

const isPlainFunction = (input: Function) =>
	typeof input === 'function' && typeof input.prototype.view !== 'function'

export type Attrs<T extends Element = Element> = Partial<T> & {
	[key: string]: any
}

export type DOMAttrs = {[key: string]: any}

export const m: ExtendedHyperscript = Object.assign(
	(selector: any, attrs: any, ...children: any) => {
		const makeChildren = (children: any) =>
			!children ? {} : {children: extractChildren(children)}
		if (isPlainFunction(selector)) {
			if (
				attrs &&
				(typeof attrs !== 'object' || attrs.tag != null || Array.isArray(attrs))
			)
				return selector(makeChildren([].concat(attrs).concat(children)))
			return selector({...attrs, ...makeChildren(children)})
		}
		return hyperscript(selector, attrs, ...children)
	},
	hyperscript
)
