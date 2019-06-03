// Preact's lazy is not yet ready for prime time...
import {ComponentType, m} from '../hyperscript'
import {View} from '../ui/view'

export const lazy = <T extends {}>(
	fetch: () => Promise<{default: ComponentType<T>}>
) => {
	return class LazyLoad<T> extends View<T> {
		state: {
			component?: ComponentType<T>
		} = {}

		onInit() {
			fetch()
				.then(component => this.setState({component: component.default}))
				.catch(console.error)
		}

		render() {
			const {children, ...attrs} = this.attrs
			const {component} = this.state
			const Component = component as any
			if (!Component) return null
			return <Component {...attrs}>{children}</Component>
		}
	}
}
