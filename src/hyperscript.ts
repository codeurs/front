import {ComponentChildren, h} from 'preact'

export {h as m} from 'preact'

export type DOMAttrs = {[key: string]: any}

export type ChildrenType<A> = A extends {children?: any}
	? A['children']
	: ComponentChildren

export type Children = ComponentChildren