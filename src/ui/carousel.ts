import './carousel.less'

import {Children, Vnode} from 'mithril'
import {
	calc, listen, pointer, spring, styler, value, ValueReaction
} from 'popmotion'
import {m} from '../hyperscript'
import {Lethargy} from '../util/lethargy'
import {View} from './view'

// Todo: 
// x https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action (pan-x)
// https://codesandbox.io/s/0094879v40
// Macbook swipe
// https://www.w3.org/WAI/tutorials/carousels/structure/
// http://w3c.github.io/aria-practices/examples/carousel/carousel-1/carousel-1.html
// https://popmotion.io/pose/api/dom-pose/

const mix = calc.getValueFromProgress

type Snaps = {pages: Array<number>, elements: Array<number>}

const closest = (snaps: Array<number>, value: number) =>
	snaps.reduce((prev, curr) =>
		(Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev)
	)

type CarouselApi = {
	totalPages: number
	activePage: number
	goTo(pageIndex: number): void
	goToElement(elementIndex: number): void
	isActive(elementIndex: number): boolean
}

type CarouselRenderApi = (api: CarouselApi) => Children

function angleIsVertical(angle: number) {
  const isUp = (
    angle <= -90 + 45 &&
    angle >= -90 - 45
  )
  const isDown = (
    angle <= 90 + 45 &&
    angle >= 90 - 45
  )
  return (isUp || isDown)
}

const clamp = (min: number, max: number, value: number) => 
	Math.min(Math.max(value, min), max)

export class Carousel extends View<{
	snapTo?: 'elements' | 'pages'
	infinite?: boolean
	tug?: number
	power?: number
	children: CarouselRenderApi
}, HTMLDivElement> {
	dom!: HTMLDivElement
	offset = value(0)
	snaps: Snaps = {pages: [0], elements: [0]}
	activePage = 0
	preventClick = false

	get content(): HTMLDivElement {
		return this.dom.firstChild as HTMLDivElement
	}

	get max() {
		return this.content.scrollWidth - this.dom.offsetWidth
	}

	get x() {
		return this.offset.get() as number
	}

	redraw() {
		m.redraw()
	}

	onCreate() {
		this.onUpdate()
		const contentStyler = styler(this.content)
		const clearSubscription = this.offset.subscribe((offset: number) => {
			contentStyler.set('x', offset)
		}).unsubscribe

		const snapToPoint = (start: number) => {
			const {snapTo = 'pages', power = .25} = this.attrs
			const snaps = this.snaps[snapTo]
			const from = this.x
			const velocity = this.offset.getVelocity()
			const distance = from - start
			const amplitude = power * velocity
			const idealTarget = Math.round(from + amplitude)
			const snap = closest(snaps, -idealTarget)
			this.preventClick = Math.abs(distance) > 1
			// Set active page/element
			this.spring(snap)
		}
			
		const clearMove = listen(this.dom, 'mousedown touchstart').start(() => {
			this.preventClick = false
			const start = this.x
			pointer({
				x: start,
				preventDefault: false
			})
				.pipe((pos: {x: number}) => pos.x, this.overDrag)
				.start(this.offset)

			listen(document, 'mouseup touchend', {once: true})
				.start(() => snapToPoint(start))
		}).stop

		const onClick = (e: MouseEvent) =>
			this.preventClick && e.stopPropagation()

		this.dom.addEventListener('click', onClick, true)
		const clearClick = () =>
			this.dom.removeEventListener('click', onClick, true)

		const lethargy = new Lethargy()
		let wheelTimeout: any, wheelStart: null | number = null,
			lastScroll = performance.now()
		const onWheel = (e: MouseWheelEvent) => {
			if (wheelStart === null) wheelStart = this.x
			const angle = calc.angle({
				x: e.deltaX,
				y: e.deltaY
			})
			if (angleIsVertical(angle)) return
			e.stopPropagation()
			e.preventDefault()
			console.log(lethargy.check(e.deltaX))
			const now = performance.now()
			const diff = now - lastScroll
			lastScroll = now
			//console.log({now, diff})
			const infl = clamp(0, 1, calc.getProgressFromValue(0, 100, diff))
			if (infl > .01) {
				this.offset.stop()
				this.offset.update(this.x - e.deltaX * infl)
			} else {
				if (wheelStart !== null) {
					console.log(wheelStart)
					snapToPoint(wheelStart)
				}
				wheelStart = null
				clearTimeout(wheelTimeout)
			}
		}
		this.dom.addEventListener('wheel', onWheel)
		const clearWheel = () =>
			this.dom.removeEventListener('wheel', onWheel)

		this.onRemove = () => {
			clearSubscription()
			clearMove()
			clearClick()
			clearWheel()
		}

		this.redraw()
	}

	onUpdate() {
		this.snaps = this.calcSnaps()
	}

	overDrag = (v: number) => {
		const {tug = 0.4} = this.attrs
		const min = -this.max, max = 0
		if (v < min) return mix(min, v, tug)
		if (v > max) return mix(max, v, tug)
		return v
	}

	calcSnaps() {
		const pageWidth = this.dom.offsetWidth
		const children = Array.from(this.content.children) as Array<HTMLElement>
		return children.reduce<Snaps>(({pages, elements}, child, i) => {
			const prevPage = pages[pages.length - 1]
			const prevElement = elements[elements.length - 1]
			const width = child.offsetWidth
			const offset = prevElement + width
			elements.push(offset)
			if (prevElement > 0 && offset - prevPage >= pageWidth) 
				pages.push(prevElement)
			return {pages, elements}
		}, {pages: [0], elements: [0]})
	}

	spring(destination: number) {
		const from = this.offset.get()
		const to = -Math.min(destination, this.max)
		this.setActivePage(destination)
		spring({
			from,
			to,
			velocity: this.offset.getVelocity(),
			stiffness: 100,
			damping: 20
		}).start(this.offset)
		this.redraw()
	}

	setActivePage(destination: number) {
		const {pages} = this.snaps
		this.activePage = pages.indexOf(closest(pages, destination))
	}
	
	render() {
		const current = this.x
		const {pages, elements} = this.snaps
		const activePage = this.activePage
		return m('.carousel', 
			m('.carousel-content', this.children({
				activePage,
				totalPages: pages.length,
				goTo: (pageIndex: number) => {
					this.spring(pages[pageIndex])
				},
				goToElement: (elementIndex: number) => {
					this.spring(elements[elementIndex])
				},
				isActive: (elementIndex: number) => {
					const from = pages[activePage]
					const to = pages[activePage + 1] || this.max
					const pos = elements[elementIndex]
					return pos >= from && pos <= to
				}
			}))
		)
	}
}