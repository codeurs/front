import {Children, ChildArray} from 'mithril'

export const extractChildren = (children: Children): Children => {
	if (!Array.isArray(children)) return children
	if (children[0] && typeof children[0] == 'function') 
		return children[0]
	return ([] as ChildArray).concat(...children)
}