import {ComponentConstructors, m} from '../hyperscript'
import {View} from '../ui/view'

export const lazy = <T>(
	fetch: () => Promise<{default: ComponentConstructors<T>}>
) => {
	let component: null | ComponentConstructors<T> = null
	return class LazyLoad<T> extends View<T> {
		onInit() {
			fetch()
				.then(loaded => (component = loaded.default))
				.then(m.redraw)
				.catch(console.error)
		}
		render() {
			const {children, ...attrs} = this.attrs
			return component && m(component as any, attrs, children)
		}
	}
}
