import m from 'mithril'
import {Component} from './component'
import classnames from 'classnames'

const WIDTHS = [100, 200, 400, 600, 800]
const HEIGHTS = [100, 200, 400, 600, 800]

export function largeImage(img) {
	return getResizedUrl(img.src, 800, 800)
}

export function getResizedUrl(url, width, height) {
	let w = WIDTHS.find(w => w > width)
	let h = HEIGHTS.find(h => h > height)
	if (!w) w = WIDTHS[WIDTHS.length - 1]
	if (!h) h = HEIGHTS[HEIGHTS.length - 1]
	return `/cache/${w}/${h}${url}`
}

import './picture.less'
export class Picture extends Component<{
	empty?: boolean,
	width?: number,
	height?: number,
	src?: string,
	mod?: any,
	inline?: boolean,
	max?: number,
}> {
	sized(path, width) {
		if (path.charAt(0) != '/') path = `/${path}`
		return `/cache/${width}/auto${path}`
	}

	srcset(path, max) {
		return WIDTHS.filter(width => width <= max).map(width => {
			const src = this.sized(path, width)
			return `${src} ${width * 2}w`
		})
	}

	view() {
		const {
			empty,
			width,
			height,
			src,
			mod,
			inline = false,
			max = 800,
			...attrs
		} = this.attrs
		if (empty || !src) return
		const set = this.srcset(src, max)
		return m('.picture',
			{
				class: classnames([
					`mod-${mod}`,
					{
						'is-inline': inline
					}
				])
			},
			m('img.picture-el', {
				src: this.sized(src, WIDTHS[WIDTHS.length - 1]),
				width,
				height,
				srcset: set.join(', '),
				alt: '',
				...attrs
			})
		)
	}
}
