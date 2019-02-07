import m from 'mithril'
import {View} from '../ui/view'
import {Image, ImageResizer} from '../ui/image'
import {classes} from '../util/classes'

const WIDTHS = [100, 200, 400, 600, 800]
const HEIGHTS = [100, 200, 400, 600, 800]

export function getResizedUrl(url, width, height) {
	let w = WIDTHS.find(w => w > width)
	let h = HEIGHTS.find(h => h > height)
	if (!w) w = WIDTHS[WIDTHS.length - 1]
	if (!h) h = HEIGHTS[HEIGHTS.length - 1]
	return `/cache/${w}/${h}${url}`
}

export class Picture extends View<
	{
		src: string
		empty?: boolean
		width?: number
		height?: number
		inline?: boolean
		max?: number
		[key: string]: any
	},
	HTMLDivElement
> {
	view() {
		const {children, inline, class: className, max, empty, ...rest} = this.attrs
		if (empty) return
		return m(ImageResizer,
			{
				resize: (attrs, container) => {
					const {src} = attrs
					const url = getResizedUrl(src, container.width, Infinity)
					return {...attrs, src: url}
				}
			},
			m(Image, {
				style: {display: inline && 'inline'},
				...classes('picture', className),
				...rest
			})
		)
	}
}
