import {CVnode} from 'mithril'
import {StatelessView} from 'ui'
import {ComponentConstructors, m} from '../hyperscript'

type Constructors<T> = {new (vnode: CVnode<any>): T}

export function wrap<L extends {}, T extends Constructors<any>>(
	layoutView: ComponentConstructors<Partial<L>>,
	options: Partial<L> = {}
): (component: T) => T {
	return (component: T): T => {
		const comp: StatelessView<any> = ({children, ...attrs}) =>
			m(layoutView, {...attrs, ...options}, m(component, attrs, children))
		return (comp as any) as T
	}
}
