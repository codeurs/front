import {Children} from 'mithril'
import {m} from '../hyperscript'
import {ConsumerAttrs, createContext} from './context'
import {Component} from './component'

const ctx = createContext({})

type ThemeAttrs<T> = {theme: T} | {children: (value: T) => Children}

export class Theme<T> extends Component<ThemeAttrs<T>> {
	render(): Children {
		const {children} = this.attrs
		if ('theme' in this.attrs)
			return m(ctx.Provider, {value: this.attrs.theme}, children)
		return m(ctx.Consumer, children)
	}
}
