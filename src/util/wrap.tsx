import {Component} from 'preact'
import {m} from '../hyperscript'
import {StatelessView} from '../ui/view'

export function wrap<L extends {}, T extends Component<{}>>(
	layout: Component<Partial<L>>,
	options: Partial<L> = {}
): (component: T) => T {
	return (component: T): T => {
		const View = layout as any
		const comp: StatelessView<{}> = ({children, ...attrs}) => (
			<View {...attrs} {...options}>
				{children}
			</View>
		)
		return (comp as any) as T
	}
}
