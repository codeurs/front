import m, {Children} from 'mithril'
import {View} from './view'

export class Breakpoint<T> extends View<
	{
		children?: (attrs: T) => Children
	} & {
		[breakpoint: string]: T
	}
> {
	matchers = new Map<string, MediaQueryList>()

	onInit = this.createMatchers
	onBeforeUpdate = this.createMatchers
	onRemove = this.removeMatchers

	createMatchers() {
		const {children, ...breakpoints} = this.attrs
		const keys = Object.keys(breakpoints)
		keys.forEach(query => {
			if (this.matchers.has(query)) return
			const matcher = matchMedia(query)
			matcher.addListener(m.redraw)
			this.matchers.set(query, matchMedia(query))
		})
		this.removeMatchers(keys)
	}

	removeMatchers(except: Array<string> = []) {
		this.matchers.forEach((matcher, query) => {
			if (except.indexOf(query) > -1) return
			matcher.removeListener(m.redraw)
			this.matchers.delete(query)
		})
	}

	render() {
		const {children, ...breakpoints} = this.attrs
		const keys = Object.keys(breakpoints)
		const active = Array.from(this.matchers).reduce(
			(active: null | string, [key, matcher]) => {
				if (!matcher.matches) return active
				if (!active) return key
				if (keys.indexOf(key) > keys.indexOf(active)) return key
				return active
			},
			null
		)
		return active && children && children(this.attrs[active])
	}
}
