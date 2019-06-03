import {
	Attributes,
	ComponentChildren,
	ComponentType as ComponentTypePreact,
	createElement,
	JSX as JSXPreact
} from 'preact'
import {ComponentType as ComponentTypeReact} from 'react'

export type ComponentType<P = {}> =
	| ComponentTypeReact<P>
	| ComponentTypePreact<P>

type Hyperscript = {
	(
		type: string,
		props: Record<string, any> | null,
		...children: Array<ComponentChildren>
	): ComponentChildren
	<P>(
		type: ComponentType<P>,
		props: Attributes & P | null,
		...children: Array<ComponentChildren>
	): ComponentChildren
}

export type DOMAttrs = {[key: string]: any}

export type ChildrenType<A> = A extends {children?: any}
	? A['children']
	: ComponentChildren

export type Children = ComponentChildren

export const m: Hyperscript = createElement as any

export namespace m {
	export namespace JSX {
		export interface ElementAttributesProperty {
			props: {}
		}

		export interface ElementChildrenAttribute {
			children: {}
		}

		export interface IntrinsicElements extends JSXPreact.IntrinsicElements {}
	}
}
