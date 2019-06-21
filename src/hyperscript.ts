import {createElement, ReactNode} from 'react'

export {
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

export const m: typeof createElement = ((type: any, ...args: Array<any>) => {
	const vnode = createElement(type, ...args)
	if (vnode.props.class) vnode.props.class = String(vnode.props.class)
	return vnode
}) as any
