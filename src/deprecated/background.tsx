import {DOMAttrs, m} from '../hyperscript'
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
		return (
			<ImageResizer
				resize={(
					attrs: {src: string} & DOMAttrs,
					container: {width: number; height: number}
				) => {
					const {src} = attrs
					if (src.indexOf('://') > -1) return attrs
					const url = getResizedUrl(src, container.width, container.height)
					return {...attrs, src: url}
				}}
			>
				<Image
					src={src}
					background={true}
					fit="cover"
					position={position}
					upScale={true}
					{...classes('background', className)}
					{...rest}
				>
					{children}
				</Image>
			</ImageResizer>
		)
	}
}
