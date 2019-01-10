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

export type RouterContext = LocationData & History & RouterAttrs

const {Provider, Consumer} = createContext<RouterContext>()

export const Location = Consumer

const pathnameMatcher: Matcher = (location, route) =>
	parseRoute(location.pathname, route)

type RouterAttrs = {
	matcher?: Matcher
	formatPath?: (path: string) => string
	language?: string
}

export class Router extends View<RouterAttrs> {
	static instances = 0

	onCreate() {
		if (!Router.instances++) window.addEventListener('popstate', m.redraw)
		this.onRemove = () => {
			if (!--Router.instances) window.removeEventListener('popstate', m.redraw)
		}
	}

	view() {
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
