import m, {Children} from 'mithril'
import {ListenerCache} from '../util/listenercache'
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

	createMatchers() {
		const {children, ...breakpoints} = this.attrs
		Object.keys(breakpoints).forEach(query => {
			if (this.matchers.has(query)) return
			const matcher = matchMedia(query)
			matcher.addListener(m.redraw)
			this.matchers.set(query, matchMedia(query))
		})
		this.matchers.forEach((matcher, query) => {
			if (query in breakpoints) return
			matcher.removeListener(m.redraw)
			this.matchers.delete(query)
		})
	}

	onRemove() {
		this.matchers.forEach((matcher, query) => {
			matcher.removeListener(m.redraw)
			this.matchers.delete(query)
		})
	}

	view() {
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
