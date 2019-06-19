import {ReactElement} from 'react'
import {Children, m} from '../hyperscript'
import {View} from '../ui/view'
import {Route, RouteAttrs} from './route'
import {Location, RouterContext} from './router'

export class Switch extends View<{
	children: Array<ReactElement<RouteAttrs>>
}> {
	render() {
		const {children} = this.attrs
		return (
			<Location>
				{(location: RouterContext) => {
					for (const child of children) {
						const props = child!.props! as RouteAttrs & {
							children: Children
						}
						if (child.type !== Route)
							throw `Unexpected child type "${child.type}", expected "Route"`
						const Render = props.children as any
						const match = location.match(props)
						if (!match) continue
						return Render && <Render match={match} location={location} />
					}
				}}
			</Location>
		)
	}
}
