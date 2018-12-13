import {Children, CVnode} from 'mithril'
import {View} from './view'

export type ValueSetter<T> = ((previous: T) => T)
export type ProviderAttrs<T> = {value: T | ValueSetter<T>}
export type Provider<T> = {
	new (vnode: CVnode<ProviderAttrs<T>>): View<ProviderAttrs<T>>
}
export type ConsumerAttrs<T> = {children: (value: T) => Children}
export type Consumer<T> = {
	new (vnode: CVnode<ConsumerAttrs<T>>): View<ConsumerAttrs<T>>
}

function isSetter<T>(value: T | ValueSetter<T>): value is ValueSetter<T> {
	return typeof value === 'function'
}

export const createContext = <T>(
	context?: T
): {
	Provider: Provider<T>
	Consumer: Consumer<T>
} => {
	return {
		Provider: class Provider extends View<ProviderAttrs<T>> {
			redraw() {
				const {value} = this.attrs
				const previous = context
				context = isSetter(value) ? value(previous) : value
				super.redraw()
				context = previous
			}
			render() {
				return this.children
			}
		},
		Consumer: class Consumer extends View<ConsumerAttrs<T>> {
			render() {
				return this.attrs.children(context)
			}
		}
	}
}
