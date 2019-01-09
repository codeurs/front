// See https://github.com/MithrilJS/mithril.js/issues/2148#issuecomment-452023800

import m, {CVnode, Children} from 'mithril'
import {View} from './view'

export type ProviderAttrs<T> = {value: T}
export type Provider<T> = {
	new (vnode: CVnode<ProviderAttrs<T>>): View<ProviderAttrs<T>>
}
export type ConsumerAttrs<T> = {children: (value: T) => Children}
export type Consumer<T> = {
	new (vnode: CVnode<ConsumerAttrs<T>>): View<ConsumerAttrs<T>>
}
export type Context<T> = {
	Provider: Provider<T>
	Consumer: Consumer<T>
}

export const createContext = <T>(context?: T): Context<T> => ({
	Provider: class Provider extends View<ProviderAttrs<T>> {
		render() {
			const received = context
			const {value, children} = this.attrs
			context = value
			return [
				children,
				m({
					view: () => {
						context = received
					}
				})
			]
		}
	},
	Consumer: class Consumer extends View<ConsumerAttrs<T>> {
		render() {
			const {children} = this.attrs
			return children(context)
		}
	}
})
