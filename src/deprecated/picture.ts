import {DOMAttrs} from 'hyperscript'
import m from 'mithril'
import {Image, ImageResizer} from '../ui/image'
import {View} from '../ui/view'
import {classes} from '../util/classes'

const WIDTHS = [100, 200, 400, 600, 800]
const HEIGHTS = [100, 200, 400, 600, 800]

export function getResizedUrl(url: string, width: number, height: number) {
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
	render() {
		const {
			children,
			inline,
			class: className,
			max,
			empty,
			focus: position,
			...rest
		} = this.attrs
		if (empty) return
		return m(ImageResizer,
			{
				resize: (
					attrs: {src: string} & DOMAttrs,
					container: {width: number; height: number}
				) => {
					const {src} = attrs
					if (src.indexOf('://') > -1) return attrs
					const url = getResizedUrl(src, container.width, Infinity)
					return {...attrs, src: url}
				}
			},
			m(Image, {
				upScale: true,
				position,
				style: {display: inline && 'inline'},
				...classes('picture', className),
				...rest
			})
		)
	}
}
