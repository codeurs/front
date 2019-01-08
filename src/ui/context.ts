// See https://github.com/MithrilJS/mithril.js/issues/2148#issuecomment-452023800

import m, {Component} from 'mithril'
import {extractChildren} from '../util/children'
import {Inline} from './inline'

export type ProviderAttrs<T> = {value: T}
export type Provider<T> = Component<ProviderAttrs<T>>
//export type ConsumerAttrs<T> = {children: (value: T) => Children}
export type Consumer<T> = Component //<T> = Component<ConsumerAttrs<T>>
export type Context<T> = {
	Provider: Provider<T>
	Consumer: Consumer<T>
}

export const createContext = <T>(context?: T): Context<T> => ({
	Provider: {
		view: v => {
			const old = context
			const {value} = v.attrs as ProviderAttrs<T>
			context = value
			return [
				v.children,
				m(Inline, {
					view: () => {
						context = old
					}
				})
			]
		}
	},
	Consumer: {
		view: v => {
			const consumer = extractChildren(v.children)
			if (typeof consumer === 'function') return consumer(context)
		}
	}
})
