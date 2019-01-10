import {
	m as hyperscript,
	Attributes,
	ComponentTypes,
	Lifecycle,
	Children,
	Vnode
} from 'mithril-es'

type ChildAttr<T> = {children: T} | {children?: T}

//const mithrilStatic = {...hyperscript}

type ExtendedHyperscript = {
	(selector: string, ...children: Children[]): Vnode<any, any>
	(selector: string, attributes: Attributes, ...children: Children[]): Vnode<
		any,
		any
	>
	<Attrs, State, Child>(
		component: ComponentTypes<ChildAttr<Child> & ChildAttr<Child>, State>,
		...args: Child[]
	): Vnode<Attrs, State>
	<Attrs, State, Child>(
		component: ComponentTypes<ChildAttr<Child> & Attrs, State>,
		attributes: Attrs & Lifecycle<Attrs, State> & {key?: string | number},
		...args: Child[]
	): Vnode<Attrs, State>
	<Child>(
		component: (attrs: ChildAttr<Child>) => Children,
		...args: Child[]
	): Vnode<{}>
	<Attrs, Child>(
		component: (attrs: ChildAttr<Child> & Attrs) => Children,
		attributes: Attrs & {key?: string | number},
		...args: Child[]
	): Vnode<Attrs>
} //& typeof mithrilStatic

const isPlainFunction = input =>
	typeof input === 'function' && typeof input.prototype.view !== 'function'

export const m: ExtendedHyperscript = Object.assign(
	(selector, attrs, ...children) => {
		if (isPlainFunction(selector)) {
			if (
				attrs &&
				(typeof attrs !== 'object' || attrs.tag != null || Array.isArray(attrs))
			)
				return selector({children: [...attrs, ...children]})
			return selector({...attrs, children})
		}
		return hyperscript(selector, attrs, ...children)
	},
	hyperscript
)
