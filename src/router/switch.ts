import {Children, Vnode} from 'mithril'
import {ComponentConstructors, m} from '../hyperscript'
import {View} from '../ui/view'
import {extractChildren} from '../util/children'
import {Match} from './parseroute'
import {Route, RouteAttrs} from './route'
import {Location, RouterContext} from './router'

export class Switch extends View<{
	children: Array<Vnode<RouteAttrs>>
}> {
	render() {
		const {children} = this.attrs
		return m(Location, (location: RouterContext) => {
			for (const child of children) {
				if (child.tag !== Route)
					throw `Unexpected child type "${child.tag}", expected "Route"`
				const render = extractChildren(
					child.children
				) as ComponentConstructors<{match?: Match; location?: RouterContext}>
				const match = location.match(child.attrs)
				if (!match) continue
				return render && m(render, {match, location})
			}
		})
	}
}
