import './image.less'

import {DOMAttrs, m} from '../hyperscript'
import {classes} from '../util/classes'
import {contain, cover} from '../util/fit'
import {createContext} from './context'
import {View} from './view'

export type ImageFit = 'portrait' | 'landscape' | 'cover' | 'contain'

type Size = {
	width: number
	height: number
}

const supportsObjectFit = window.navigator.msMaxTouchPoints === undefined

const canUpscale = (fit: 'cover' | 'contain', container: Size, image: Size) => {
	const test = fit === 'cover' ? cover : contain
	const {width, height} = test(
		container.width,
		container.height,
		image.width,
		image.height
	)
	return width < image.width && height < image.height
}

export type ImageAttrs = {
	src: string
	width?: number
	height?: number
	fit?: ImageFit
	upScale?: boolean
	position?: undefined | false | string | {x: number; y: number}
	background?: boolean
} & DOMAttrs

class ImageBase extends View<ImageAttrs, HTMLImageElement> {
	onCreate() {
		if (!this.shouldCheckScale()) return
		const listener = () => this.scale()
		window.addEventListener('resize', listener)
		this.onRemove = () => window.removeEventListener('resize', listener)
		this.scale()
	}

	onUpdate = this.scale

	shouldCheckScale() {
		const {width, height, fit, upScale} = this.attrs
		const crop = fit === 'cover' || fit === 'contain'
		return !upScale && width && height && crop
	}

	scale() {
		const {width = 0, height = 0, fit, background} = this.attrs
		if (!this.dom || !this.shouldCheckScale()) return
		const useBackground = background || !supportsObjectFit
		const container = this.dom.getBoundingClientRect()
		if (canUpscale(fit as any, container, {width, height})) return
		if (useBackground) this.dom.style.backgroundSize = 'auto'
		else this.dom.style.objectFit = 'none'
	}

	render() {
		const {
			src,
			children,
			fit = 'landscape',
			upScale,
			background,
			position = 'center center',
			alt = '',
			width,
			height,
			class: cl1,
			className: cl2,
			style,
			// These get passed by sizeof-loader, but we don't want them to be passed
			// to the dom
			type,
			bytes,
			...attrs
		} = this.attrs
		const crop = background || fit === 'cover' || fit === 'contain'
		const useBackground = background || (!supportsObjectFit && crop)
		const tag = useBackground ? 'div' : 'img'
		const focus =
			typeof position === 'string'
				? position
				: position && `${position.x * 100}% ${position.y * 100}%`
		return m(tag, {
			...classes('image', cl1, cl2, {mod: {crop}}),
			...(useBackground
				? {
						role: 'img',
						'aria-label': alt,
						style: {
							backgroundImage: `url('${src}')`,
							backgroundSize: crop && fit,
							backgroundPosition: focus,
							backgroundRepeat: 'no-repeat',
							...style
						}
				  }
				: {
						src,
						alt,
						width,
						height,
						style: {
							objectFit: crop && fit,
							objectPosition: focus !== 'center center' && focus,
							...style
						}
				  }),
			...attrs
		})
	}
}

type Resizer = (info: ImageAttrs, container: Size) => ImageAttrs

const ImageResizerContext = createContext<Resizer>()

export class ImageResizer extends View<{
	resize: Resizer
}> {
	render() {
		const {resize} = this.attrs
		return m(ImageResizerContext.Provider, {value: resize}, this.children)
	}
}

export class Image extends View<ImageAttrs, HTMLElement> {
	cached: undefined | string
	resolved: undefined | ImageAttrs
	render() {
		const {
			children,
			src,
			width,
			height,
			fit,
			position,
			type,
			bytes,
			...rest
		} = this.attrs
		return m(ImageResizerContext.Consumer, (resize: Resizer | undefined) => {
			if (!resize) return m(ImageBase, this.attrs)
			const resolve = (dom: HTMLElement) => {
				this.resolved = resize(this.attrs, {
					width: dom.offsetWidth,
					height: dom.offsetHeight
				})
				this.cached = src
			}
			if (!this.dom)
				return m('div', {
					...rest,
					oncreate: vnode => {
						resolve(vnode.dom as HTMLElement)
						m.redraw()
					}
				})
			if (this.cached !== src) resolve(this.dom)
			return this.resolved && m(ImageBase, this.resolved)
		})
	}
}
