import {m} from '../hyperscript'
import {View} from '../ui/view'
import {Match} from './parseroute'
import {Location, RouteInfo, RouterContext} from './router'

type RouteProps = {
	match?: Match
	location?: RouterContext
	[key: string]: any
}

export type RouteAttrs = RouteInfo & {
	children: any // Todo: type as component constructor and pass jsx
}

export class Route extends View<RouteAttrs> {
	render() {
		const {children} = this.attrs
		return (
			<Location>
				{(location: RouterContext) => {
					const match = location.match(this.attrs)
					const View = children as any
					return match && View && <View match={match} location={location} />
				}}
			</Location>
		)
	}
}
