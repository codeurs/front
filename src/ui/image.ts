import './image.less'

import {DOMAttrs, m} from '../hyperscript'
import {addClasses} from '../util/classes'
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

const BrowserImage = (window as any)['Image']

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
	loader?: typeof BrowserImage

	onCreate() {
		this.load()
		if (!this.shouldCheckScale) return
		const listener = () => this.scale()
		window.addEventListener('resize', listener)
		this.onRemove = () => window.removeEventListener('resize', listener)
		this.scale()
	}

	onUpdate = () => {
		this.load()
		this.scale()
	}

	load() {
		const {onload, onerror, src} = this.attrs
		if (!onload && !onerror) return
		if (this.loader && this.loader.src === src) return
		if (!this.loader) {
			const img = new BrowserImage()
			img.onload = (e: Event) => this.attrs.onload && this.attrs.onload(e)
			img.onerror = (e: Error) => this.attrs.onerror && this.attrs.onerror(e)
			this.loader = img
		}
		this.loader.src = src
	}

	scale() {
		const {width = 0, height = 0, fit, background} = this.attrs
		if (!this.dom || !this.shouldCheckScale) return
		const container = this.dom.getBoundingClientRect()
		if (canUpscale(fit as any, container, {width, height})) return
		if (this.useBackground) this.dom.style.backgroundSize = 'auto'
		else this.dom.style.objectFit = 'none'
	}

	get shouldCheckScale() {
		const {width, height, fit, upScale} = this.attrs
		const crop = fit === 'cover' || fit === 'contain'
		return !upScale && width && height && crop
	}

	get shouldCrop() {
		const {fit = 'landscape', background} = this.attrs
		return background || fit === 'cover' || fit === 'contain'
	}

	get useBackground() {
		const {background} = this.attrs
		return background || (!supportsObjectFit && this.shouldCrop)
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
			style,
			onload,
			onerror,
			// These get passed by sizeof-loader, but we don't want them to be passed
			// to the dom
			type,
			bytes,
			...attrs
		} = this.attrs
		const crop = this.shouldCrop
		const tag = this.useBackground ? 'div' : 'img'
		const focus =
			typeof position === 'string'
				? position
				: position && `${position.x * 100}% ${position.y * 100}%`
		return m(tag,
			{
				...(this.useBackground
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
				...addClasses(attrs, 'image', {mod: {crop}})
			},
			children
		)
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
			upScale,
			background,
			alt = '',
			type,
			bytes,
			style,
			...rest
		} = this.attrs
		const crop = background || fit === 'cover' || fit === 'contain'
		return m(ImageResizerContext.Consumer, (resize: Resizer | undefined) => {
			if (!resize) return m(ImageBase, this.attrs, children)
			const resolve = (dom: HTMLElement) => {
				this.resolved = resize(this.attrs, {
					width: dom.offsetWidth,
					height: dom.offsetHeight
				})
				this.cached = src
			}
			if (!this.dom)
				return m('div',
					{
						...addClasses(rest, 'image', {mod: {crop}}),
						oncreate: vnode => {
							resolve(vnode.dom as HTMLElement)
							m.redraw()
						}
					},
					children
				)
			if (this.cached !== src) resolve(this.dom)
			return this.resolved && m(ImageBase, this.resolved, children)
		})
	}
}
