import {m} from '../hyperscript'
import {View} from '../ui/view'
import {createContext} from '../ui/context'
import {parseRoute, Match} from './parseroute'
import {RouteAttrs} from './route'

export type LocationData = {
	protocol: string
	hostname: string
	port: string
	search: string
	hash: string
	pathname: string
}

export type History = {
	replace: (to: string) => void
	push: (href: string) => void
}

export type Matcher = (location: LocationData, route: RouteAttrs) => Match

type ContextValue = LocationData & History & RouterAttrs

const {Provider, Consumer} = createContext<ContextValue>()

export const Location = Consumer

const pathnameMatcher: Matcher = (location, route) =>
	parseRoute(location.pathname, route)

type RouterAttrs = {
	matcher?: Matcher
	formatPath?: (path: string) => string
	language?: string
}

export class Router extends View<RouterAttrs> {
	onCreate = () => (window.onpopstate = m.redraw)

	onRemove = () => (window.onpopstate = null)

	render() {
		const {
			matcher = pathnameMatcher,
			formatPath = v => v,
			language
		} = this.attrs
		const {location, history} = window
		const {protocol, hostname, port, search, hash, pathname} = location
		return m(Provider,
			{
				value: {
					language,
					protocol,
					hostname,
					port,
					search,
					hash,
					pathname,
					replace: (to: string) => {
						history.replaceState(pathname, '', to)
						m.redraw()
					},
					push: (href: string) => {
						history.pushState(href, '', href)
						m.redraw()
					},
					match: (route: RouteAttrs) => matcher(location, route),
					formatPath
				}
			},
			this.children
		)
	}
}
