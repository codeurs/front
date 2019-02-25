import {Children} from 'mithril'
import {ListenerCache} from '../util/listenercache'
import {View} from './view'

export class Breakpoint<T> extends View<
	{
		children?: (attrs: T) => Children
	} & {
		[breakpoint: string]: T
	}
> {
	active: string | null = null
	listeners = new ListenerCache({
		add: (key, listener) => {
			const matcher = matchMedia(key)
			if (matcher.matches) this.active = key
			const change = () => matcher.matches && listener()
			matcher.addListener(change)
			return () => matcher.removeListener(change)
		},
		hit: key => (this.active = key)
	})

	onRemove() {
		this.listeners.remove()
	}

	onInit = this.setRules
	onBeforeUpdate = this.setRules

	setRules() {
		const {children, ...breakpoints} = this.attrs
		this.listeners.attach(Object.keys(breakpoints))
	}

	view() {
		const {children} = this.attrs
		return this.active && children && children(this.attrs[this.active])
	}
}
