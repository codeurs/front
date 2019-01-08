import {Children} from 'mithril'

export const extractChildren = (children: Children): Children =>
	children && children[0] && typeof children[0].children == 'function'
		? children[0].children
		: children
