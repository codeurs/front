import {CVnode} from 'mithril'
import {StatelessView} from 'ui'
import {ClassComponents, ComponentConstructors, m} from '../hyperscript'

export function wrap<L extends {}, T extends ClassComponents<{}>>(
	layoutView: ComponentConstructors<Partial<L>>,
	options: Partial<L> = {}
): (component: T) => T {
	return (component: T): T => {
		const comp: StatelessView<{}> = ({children, ...attrs}) =>
			m(layoutView as any,
				{...attrs, ...options},
				m(component, attrs, children)
			)
		return (comp as any) as T
	}
}
