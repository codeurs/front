import {Children, CVnode} from 'mithril'
import {Component} from '../component'
import {Theme} from '../theme'
import {m} from '../../hyperscript'

type Constructor<T> = new(...args: any[]) => T

export const widget = <A, T extends Constructor<Component<A>>>(target: T): T =>
	class extends target {
		name = Object.getPrototypeOf(this.constructor).name
		render(): Children {
			const {children, ...attrs} = this.attrs as any
			return m(Theme, 
				theme => 
					this.name in theme
						? m(theme[this.name], attrs, children)
						: super.render()
			)
		}
	}