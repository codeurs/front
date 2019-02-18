import {m} from '../hyperscript'
import {View} from '../ui/view'
import {Location, RouterContext} from './router'

export type RouteAttrs = {
	path?: string
	exact?: boolean
	render?: any
}

export class Route extends View<RouteAttrs> {
	view() {
		const {render = this.children} = this.attrs
		return m(Location, (location: RouterContext) => {
			const match = location.match(this.attrs)
			return match && m(render, {match, location})
		})
	}
}
