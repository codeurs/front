import {m, StatelessView} from '../hyperscript'

/*export function wrap<L extends {}, T extends Component<{}>>(
	layout: Component<Partial<L>>,
	options: Partial<L> = {}
): (component: T) => T {*/
export function wrap(layout: any, options?: any): (component: any) => any {
	return (component: any): any => {
		const Layout = layout
		const Component = component
		const comp: StatelessView<{}> = ({children, ...attrs}) => (
			<Layout {...attrs} {...options}>
				<Component {...attrs}>{children}</Component>
			</Layout>
		)
		return comp as any
	}
}
