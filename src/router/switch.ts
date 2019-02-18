import {Children, Vnode} from 'mithril'
import {m} from '../hyperscript'
import {View} from '../ui/view'
import {extractChildren} from '../util/children'
import {Route, RouteAttrs} from './route'
import {Location, RouterContext} from './router'

export class Switch extends View<{
	children: Array<Vnode<RouteAttrs>>
}> {
	view() {
		const {children} = this.attrs
		return m(Location, (location: RouterContext) => {
			for (const child of children) {
				if (child.tag !== Route)
					throw `Unexpected child type "${child.tag}", expected "Route"`
				const render = child.attrs.render || extractChildren(child.children)
				const match = location.match(child.attrs)
				if (!match) continue
				return m(render, {match, location})
			}
		})
	}
}
