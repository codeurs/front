// See: https://github.com/jorgebucaran/hyperapp-router/blob/19f95f843ae2dc5b4d83f9647edc591a6450c4e3/src/Link.js
import {m} from '../hyperscript'
import {View} from '../ui/view'
import {addClasses} from '../util/classes'
import {Location, RouterContext} from './router'

export class Link extends View<{
	to: string
	target?: string
	onclick?: Function
	[key: string]: any
}> {
	render() {
		const {to, target, onclick, children, ...attrs} = this.attrs
		return m(Location, (location: RouterContext) => {
			const href = location.formatPath(to)
			const active = !!location.match({path: to, exact: attrs.exact})
			const anchorAttrs = addClasses(
				{
					...attrs,
					href,
					target,
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
				},
				{is: {active}}
			)
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

type LocationProperties = {protocol: string; hostname: string; port?: string}

const isExternal = (
	location: LocationProperties,
	anchorElement: HTMLAnchorElement
) => getOrigin(location) !== getOrigin(anchorElement)

const getOrigin: (location: LocationProperties) => string = ({
	protocol,
	hostname,
	port = ''
}) => `${protocol}//${hostname}${port && `:${port}`}`
