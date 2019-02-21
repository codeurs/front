import {ComponentConstructors, m} from '../hyperscript'
import {View} from '../ui/view'
import {Match} from './parseroute'
import {Location, RouterContext} from './router'

export type RouteAttrs = {
	path?: string
	exact?: boolean
	children?: ComponentConstructors<{
		match?: Match
		location?: RouterContext
		[key: string]: any
	}>
}

export class Route extends View<RouteAttrs> {
	view() {
		const {children} = this.attrs
		return m(Location, (location: RouterContext) => {
			const match = location.match(this.attrs)
			return match && children && m(children, {match, location})
		})
	}
}
