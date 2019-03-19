import './carousel.less'

import deepEqual from 'deep-equal'
import {Children} from 'mithril'
import {calc, listen, pointer, spring, styler, value} from 'popmotion'
import {debounce} from 'throttle-debounce'
import {m} from '../hyperscript'
import {Lethargy} from '../util/lethargy'
import {View} from './view'

// Todo:
// https://www.w3.org/WAI/tutorials/carousels/structure/
// http://w3c.github.io/aria-practices/examples/carousel/carousel-1/carousel-1.html
// infinite scroll - lazy load - autoplay

const mix = calc.getValueFromProgress

type Snaps = {pages: Array<number>, elements: Array<number>}

const closest = (snaps: Array<number>, value: number) =>
	snaps.reduce((prev, curr) =>
		(Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev)
	)

const angleIsVertical = (angle: number) => {
  const isUp = angle <= -90 + 45 && angle >= -90 - 45
  const isDown = angle <= 90 + 45 && angle >= 90 - 45
  return isUp || isDown
}

export type CarouselAttrs = {
	snapTo?: 'elements' | 'pages'
	infinite?: boolean
	tug?: number
	power?: number
	overflow?: boolean
	// Backwards compatibility
	unstyled?: boolean
	connect?: (instance: Carousel) => void
}

export class Carousel extends View<
	CarouselAttrs & {className?: string}, 
	HTMLDivElement
> {
	dom!: HTMLDivElement
	offset = value(0)
	snaps: Snaps = {pages: [0], elements: [0]}
	activePage = 0
	preventClick = false
	destination: number = 0

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
			this.spring(snap)
		}
			
		const clearMove = listen(
			this.dom, 
			'mousedown touchstart',
			{passive: true}
		).start(() => {
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

		const onClick = (e: MouseEvent) => {
			if (!this.preventClick) return
			e.stopPropagation()
			e.preventDefault()
		}

		this.dom.addEventListener('click', onClick, true)
		const clearClick = () =>
			this.dom.removeEventListener('click', onClick, true)

		this.dom.addEventListener('wheel', this.onWheel)
		const clearWheel = () =>
			this.dom.removeEventListener('wheel', this.onWheel)

		window.addEventListener('resize', this.onResize)
		const clearResize = () =>
			window.removeEventListener('resize', this.onResize)

		this.onRemove = () => {
			clearSubscription()
			clearMove()
			clearClick()
			clearWheel()
			clearResize()
		}

		this.redraw()
	}

	lethargy = new Lethargy()
	wheelStart: null | number = null
	wheelPanning = false
	onWheel = (e: MouseWheelEvent) => {
		if (this.wheelStart === null) this.wheelStart = this.x
		const angle = calc.angle({
			x: e.deltaX,
			y: e.deltaY
		})
		const direction = this.lethargy.check(e.deltaX)
		if (angleIsVertical(angle)) return
		e.stopPropagation()
		e.preventDefault()
		if (direction === false) return
		if (this.wheelPanning) return
		this.goTo(this.activePage + direction)
		this.wheelPanning = true
		setTimeout(() => this.wheelPanning = false, 500)
	}

	onResize = debounce(250, () => this.onUpdate())

	onUpdate() {
		const {connect} = this.attrs
		if (connect) connect(this)
		const oldSnaps = {...this.snaps}
		this.snaps = this.calcSnaps()
		if (deepEqual(oldSnaps, this.snaps)) return
		this.spring(this.snaps.pages[this.activePage])
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
		this.destination = Math.min(destination, this.max)
		const to = -this.destination
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

	goTo = (pageIndex: number) => {
		const {pages} = this.snaps
		if (pageIndex < 0) return
		if (pageIndex > pages.length - 1) return
		this.spring(pages[pageIndex])
	}

	goToElement = (elementIndex: number) => {
		const {elements} = this.snaps
		this.spring(elements[elementIndex])
	}

	isActive = (elementIndex: number) => {
		const width = this.dom.offsetWidth
		const x = this.destination
		const pos = this.snaps.elements[elementIndex]
		const next = this.snaps.elements[elementIndex + 1]
		// The 5 here accounts for rounding errors on high dpi screens,
		// there's possibly a better way but I don't see it at this time
		return pos >= x && next - 5 <= x + width
	}
	
	render() {
		const {overflow, unstyled, className} = this.attrs
		return m('.carousel', {
			style: {overflow: !(overflow || unstyled) && 'hidden'},
			className
		}, m('.carousel-content', {
			ondragstart: (e: Event) => e.preventDefault()
		}, this.children))
	}
}