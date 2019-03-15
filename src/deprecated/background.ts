import {DOMAttrs} from 'hyperscript'
import m from 'mithril'
import {Image, ImageResizer} from '../ui/image'
import {View} from '../ui/view'
import {classes} from '../util/classes'
import {getResizedUrl} from './picture'

export type Img = {
	src: string
	empty?: boolean
	focus?: {x: number; y: number}
}

export class Background extends View<
	{
		img: string | Img
		class?: string
	} & DOMAttrs,
	HTMLDivElement
> {
	render() {
		const {children, img, class: className, ...rest} = this.attrs
		if (img && typeof img == 'object' && img.empty) return
		const src = typeof img === 'string' ? img : img.src
		const position = (typeof img == 'object' && img.focus) || 'center center'
		return m(ImageResizer,
			{
				resize: (
					attrs: DOMAttrs,
					container: {width: number; height: number}
				) => {
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
				upScale: true,
				...classes('background', className),
				...rest
			}, children)
		)
	}
}
