import {ReactNode} from 'react'

export {
	createElement as m,
	Attributes,
	ComponentType,
	FunctionComponent,
	FunctionComponent as StatelessView
} from 'react'

export type DOMAttrs = {[key: string]: any}

export type Children = Array<ReactNode> | ReactNode

export type ChildrenType<A> = A extends {children?: any}
	? A['children']
	: Children
