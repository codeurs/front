import {Children} from 'mithril'
import {m} from '../hyperscript'
import {createContext} from '../ui/context'
import {StatelessView, View} from '../ui/view'
import {Match, parseRoute} from './parseroute'
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

export type RouteInfo = {
	path?: string
	exact?: boolean
}

export type Matcher = (
	location: LocationData,
	route: RouteInfo
) => undefined | Match

export type RouterContext = LocationData &
	History &
	RouterAttrs & {
		match: (route: RouteInfo) => Match
		formatPath: (path: string) => string
	}

const {Provider, Consumer} = createContext<RouterContext>()

export const Location: StatelessView<{
	children: (location: RouterContext) => Children
}> = ({children}) =>
	m(Consumer,
		(location: undefined | RouterContext) => location && children(location)
	)

const pathnameMatcher: Matcher = (location, route) =>
	parseRoute(location.pathname, route)

type RouterAttrs = {
	matcher?: Matcher
	formatPath?: (path: string) => string
}

export class Router extends View<RouterAttrs> {
	static instances = 0

	onCreate() {
		if (!Router.instances++) {
			window.addEventListener('popstate', m.redraw)
			window.addEventListener('hashchange', m.redraw)
		}
		this.onRemove = () => {
			if (!--Router.instances) {
				window.removeEventListener('popstate', m.redraw)
				window.removeEventListener('hashchange', m.redraw)
			}
		}
	}

	render() {
		const {
			matcher = pathnameMatcher,
			formatPath = (v: string) => v
		} = this.attrs
		const {location, history} = window
		const {protocol, hostname, port, search, hash, pathname} = location
		return m(Provider,
			{
				value: {
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
				} as RouterContext
			},
			this.children
		)
	}
}
