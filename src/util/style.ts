import classnames from 'classnames'
import {Children, Vnode} from 'mithril'
import {ComponentConstructors, DOMAttrs, m} from '../hyperscript'
import {StatelessView} from '../ui/view'

type Styler = {
	(from: string): StatelessView<DOMAttrs>
	<T = DOMAttrs>(from: string | ComponentConstructors<T>, add: string): StatelessView<T>
}

const combineClasses = <T extends {className?: string, class?: string}>(...attrs: T[]) =>
	attrs.reduce((res, attr) => ({
		...res, 
			className: classnames(
				res.className, res.class, attr.className, attr.class)
	}), {} as T)

export const style: Styler = <T extends {as?: string, children?: Children} = DOMAttrs>(from: string | ComponentConstructors<T>, add?: string):StatelessView<T> => {
	const extend = add || from
	if (typeof extend !== 'string') throw 'String selector expected'
	const vnode = m(extend) as Vnode<any, any>
	const {tag: as, attrs: parsed} = vnode
	if (typeof from === 'string' && add)
	 return style(
		({children, ...attrs}) => m(from, attrs, children), add
	 )
	return typeof from !== 'string' 
			?	({children, ...attrs}) => m(from, {
				as, ...combineClasses(parsed, attrs)
			}, children)
			: ({children, ...attrs}) => m((attrs.as || as) as any, {
				...combineClasses(parsed, attrs)
			}, children)
}