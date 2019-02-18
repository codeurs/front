import {Children} from 'mithril'

export const extractChildren = (children: Children): Children =>
	Array.isArray(children) && children[0] && typeof children[0] == 'function'
		? children[0]
		: children
