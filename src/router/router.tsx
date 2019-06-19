import {Children, m, StatelessView} from '../hyperscript'
import {createContext} from '../ui/context'
import {View} from '../ui/view'
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

const {Provider, Consumer} = createContext<undefined | RouterContext>(undefined)

export const Location: StatelessView<{
	children?: (location: RouterContext) => Children
}> = ({children}) => (
	<Consumer>
		{(location: undefined | RouterContext) =>
			location && children && children(location)
		}
	</Consumer>
)

const pathnameMatcher: Matcher = (location, route) =>
	parseRoute(location.pathname, route)

type RouterAttrs = {
	matcher?: Matcher
	formatPath?: (path: string) => string
}

export class Router extends View<RouterAttrs> {
	onCreate() {
		window.addEventListener('popstate', this.redraw)
		window.addEventListener('hashchange', this.redraw)
		this.onRemove = () => {
			window.removeEventListener('popstate', this.redraw)
			window.removeEventListener('hashchange', this.redraw)
		}
	}

	render() {
		const {
			matcher = pathnameMatcher,
			formatPath = (v: string) => v
		} = this.attrs
		const {location, history} = window
		const {protocol, hostname, port, search, hash, pathname} = location
		return (
			<Provider
				value={
					{
						protocol,
						hostname,
						port,
						search,
						hash,
						pathname,
						replace: (to: string) => {
							history.replaceState(pathname, '', to)
							dispatchEvent(new PopStateEvent('popstate', {state: pathname}))
						},
						push: (href: string) => {
							history.pushState(href, '', href)
							dispatchEvent(new PopStateEvent('popstate', {state: href}))
						},
						match: (route: RouteAttrs) => matcher(location, route),
						formatPath
					} as RouterContext
				}
			>
				{this.children}
			</Provider>
		)
	}
}
