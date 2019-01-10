import {Children} from 'mithril-es'

export const extractChildren = (children: Children): Children =>
	children && children[0] && typeof children[0] == 'function'
		? children[0]
		: children
