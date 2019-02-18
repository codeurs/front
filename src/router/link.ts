import {m} from '../hyperscript'
// See: https://github.com/jorgebucaran/hyperapp-router/blob/19f95f843ae2dc5b4d83f9647edc591a6450c4e3/src/Link.js
import {View} from '../ui/view'
import {Location, RouterContext} from './router'

export class Link extends View<{
	to: string
	target?: string
	onclick?: Function
	[key: string]: any
}> {
	view() {
		const {to, target, onclick, children, ...attrs} = this.attrs
		return m(Location, (location: RouterContext) => {
			const href = location.formatPath(to)
			const anchorAttrs = {
				...attrs,
				href,
				onclick: (e: MouseEvent & {redraw: boolean}) => {
					e.redraw = false
					if (onclick) onclick(e)
					const ignore =
						ignoreClick(e) ||
						target === '_blank' ||
						isExternal(location, e.currentTarget as HTMLAnchorElement)
					if (ignore) return
					e.preventDefault()
					location.push(href)
				}
			}
			if (typeof children === 'function')
				return children({
					active: location.match({path: to}),
					anchorAttrs
				})
			return m('a', anchorAttrs, children)
		})
	}
}

const ignoreClick = (e: MouseEvent) =>
	e.defaultPrevented ||
	e.button !== 0 ||
	e.altKey ||
	e.metaKey ||
	e.ctrlKey ||
	e.shiftKey

type Location = {protocol: string; hostname: string; port?: string}

const isExternal = (location: Location, anchorElement: HTMLAnchorElement) =>
	getOrigin(location) !== getOrigin(anchorElement)

const getOrigin: (location: Location) => string = ({
	protocol,
	hostname,
	port = ''
}) => `${protocol}//${hostname}${port && `:${port}`}`
