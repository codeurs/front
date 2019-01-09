// See: https://github.com/jorgebucaran/hyperapp-router/blob/19f95f843ae2dc5b4d83f9647edc591a6450c4e3/src/Link.js

import {View} from '../ui/view'
import {m} from '../hyperscript'
import {Location} from './router'

export class Link extends View<{
	to: string
	target?: string
	onclick?: Function
	[key: string]: any
}> {
	view() {
		const {to, target, onclick, children, ...attrs} = this.attrs
		return m(Location, location => {
			const href = location.formatPath(to)
			const anchorAttrs = {
				...attrs,
				href,
				onclick: e => {
					e.redraw = false
					if (onclick) onclick(e)
					const ignore =
						ignoreClick(e) ||
						target === '_blank' ||
						isExternal(location, e.currentTarget)
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

const ignoreClick = e =>
	e.defaultPrevented ||
	e.button !== 0 ||
	e.altKey ||
	e.metaKey ||
	e.ctrlKey ||
	e.shiftKey

const isExternal = (location, anchorElement) =>
	getOrigin(location) !== getOrigin(anchorElement)

const getOrigin = ({protocol, hostname, port = ''}) =>
	`${protocol}//${hostname}${port && `:${port}`}`
