import {m, ChildAttr} from '../hyperscript'
import {View, StatelessView} from '../ui/view'
import {CVnode} from 'mithril'

type ViewType<Attr, Dom extends Element = Element> =
	| StatelessView<Attr>
	| {new (vnode: CVnode<Attr>): View<Attr, Dom>}

export const style = <A, C>(
	component: ViewType<ChildAttr<C> & A>,
	selector?: string
): StatelessView<ChildAttr<C> & A> => {
	const styles = m(selector).attrs
	return ({children, ...attrs}) =>
		m(component as any, {...styles, ...attrs}, children)
}
