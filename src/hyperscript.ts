import hyperscript, {Attributes, Child, Children, CVnode} from 'mithril'
import {Component, View} from 'ui'
import {extractChildren} from './util/children'

export type ChildAttr<T> = {children: T} | {children?: T}

const mithrilStatic = {...hyperscript}

export type ClassComponents<Attrs> =
	| {new (vnode: CVnode<Attrs>): View<Attrs>}
	| {new (vnode: CVnode<Attrs>): Component<Attrs>}

export type ComponentConstructors<Attrs> =
	| {(attrs: Attrs): Children}
	| ClassComponents<Attrs>

type Without<T, K> = Pick<T, Exclude<keyof T, K>>
type AttributesArgument<Attrs> = Without<Attrs, 'children' | 'key'> & {key?: any}
type OptionalAttrs<Attrs> = {} extends Attrs
	? {}
	: {children: any} extends Attrs
	? {}
	: never
export type ChildrenType<Attrs> = ({children?: Children} & Attrs)['children']

type ExtendedHyperscript = {
	(selector: string, ...children: Children[]): Children
	(selector: string, attributes: Attributes, ...children: Children[]): Children
	<Attrs extends OptionalAttrs<Attrs>>(
		component: ComponentConstructors<Attrs>,
		...args: Array<ChildrenType<Attrs>>
	): Children
	<Attrs>(
		component: ComponentConstructors<Attrs>,
		attributes: AttributesArgument<Attrs>,
		...args: Array<ChildrenType<Attrs>>
	): Children
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
			!children || children.length === 0
				? {}
				: {children: extractChildren(children)}
		if (isPlainFunction(selector)) {
			if (
				attrs &&
				(typeof attrs !== 'object' || attrs.tag != null || Array.isArray(attrs))
			)
				return selector(makeChildren([].concat(attrs).concat(children)))
			return selector({...attrs, ...makeChildren(children)})
		}
		if (
			typeof selector === 'string' &&
			attrs &&
			!Array.isArray(attrs) &&
			typeof attrs === 'object' &&
			!attrs.tag
		) {
			const {children: childrenAttr, ...rest} = attrs
			return hyperscript(selector, rest, childrenAttr, ...children)
		}
		return hyperscript(selector, attrs, ...children)
	},
	hyperscript
)
