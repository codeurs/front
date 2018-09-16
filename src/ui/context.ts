import {Children, CVnode} from 'mithril'
import {Component} from './component'

export type ProviderAttrs<T> = {value: T | ((old: T) => T)}
export type Provider<T> = {
	new (vnode: CVnode<ProviderAttrs<T>>): Component<ProviderAttrs<T>>
}
export type ConsumerAttrs<T> = {children: (value: T) => Children}
export type Consumer<T> = {
	new (vnode: CVnode<ConsumerAttrs<T>>): Component<ConsumerAttrs<T>>
}

export const createContext = <T>(
	context?: T
): {
	Provider: Provider<T>
	Consumer: Consumer<T>
} => {
	return {
		Provider: class Provider extends Component<ProviderAttrs<T>> {
			redraw() {
				const {value} = this.attrs
				const old = context
				context = typeof value === 'function' ? value(old) : value
				super.redraw()
				context = old
			}
			render() {
				return this.children
			}
		},
		Consumer: class Consumer extends Component<ConsumerAttrs<T>> {
			render() {
				return this.attrs.children(context)
			}
		}
	}
}
