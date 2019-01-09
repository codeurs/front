import {View} from '../ui/view'
import {Route, RouteAttrs} from './route'
import {Vnode} from 'mithril'
import {m} from '../hyperscript'
import {Location} from './router'

export class Switch extends View<{
	children: Array<Vnode<RouteAttrs>>
}> {
	render() {
		const {children} = this.attrs
		return m(Location, location => {
			for (const child of children) {
				if (child.tag !== Route)
					throw `Unexpected child type "${child.tag}", expected "Route"`
				const {render} = child.attrs
				const match = location.match(child.attrs)
				if (!match) continue
				return m(render, {match, location})
			}
		})
	}
}
