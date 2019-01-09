import {View} from '../ui/view'
import {m} from '../hyperscript'
import {Location} from './router'

export type RouteAttrs = {
	path?: string
	render: any
	exact?: boolean
}

export class Route extends View<RouteAttrs> {
	render() {
		const {render} = this.attrs
		return m(Location, location => {
			const match = location.match(this.attrs)
			return match && m(render, {match, location})
		})
	}
}
