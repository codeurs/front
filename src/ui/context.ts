// See https://github.com/MithrilJS/mithril.js/issues/2148#issuecomment-452023800

import m, {CVnode, Children} from 'mithril'
import {View} from './view'
import {extractChildren} from '../util/children'
import {Inline} from './inline'

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
			const old = context
			const {value, children} = this.attrs
			context = value
			return [
				children,
				m(Inline, {
					view: () => {
						context = old
					}
				})
			]
		}
	},
	Consumer: class Consumer extends View<ConsumerAttrs<T>> {
		render() {
			const consumer = this.children
			if (typeof consumer === 'function') return consumer(context)
		}
	}
})
