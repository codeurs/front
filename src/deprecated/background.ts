import m from 'mithril'
import {View} from '../ui/view'
import {getResizedUrl} from './picture'
import {Image, ImageResizer} from '../ui/image'
import {classes} from '../util/classes'

export type Img = {
	src: string
	empty?: boolean
	focus?: {x: number; y: number}
}

export class Background extends View<
	{
		img: string | Img
		class?: string
		[key: string]: any
	},
	HTMLDivElement
> {
	view() {
		const {children, img, class: className, ...rest} = this.attrs
		if (img && typeof img == 'object' && img.empty) return
		const src = typeof img === 'string' ? img : img.src
		const position = typeof img == 'object' && img.focus
		return m(ImageResizer,
			{
				resize: (attrs, container) => {
					const {src} = attrs
					const url = getResizedUrl(src, container.width, container.height)
					return {...attrs, src: url}
				}
			},
			m(Image, {
				src,
				background: true,
				fit: 'cover',
				position,
				...classes('background', className),
				...rest
			})
		)
	}
}
