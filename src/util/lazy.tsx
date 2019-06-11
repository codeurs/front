// Preact's lazy is not yet ready for prime time...
import {ComponentType, m} from '../hyperscript'
import {View} from '../ui/view'

const cache = new Map<Function, ComponentType<any>>()

export const lazy = <T extends {}>(
	fetch: () => Promise<{default: ComponentType<T>}>
) => {
	return class LazyLoad<T> extends View<T> {
		onInit() {
			if (cache.has(fetch)) return
			fetch()
				.then(component => cache.set(fetch, component.default))
				.then(this.redraw)
				.catch(console.error)
		}

		render() {
			const {children, ...attrs} = this.attrs
			const Component = cache.get(fetch)
			if (!Component) return null
			return <Component {...attrs}>{children}</Component>
		}
	}
}
