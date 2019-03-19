import {Carousel, CarouselAttrs} from '../ui/carousel'

export class CarouselStore implements CarouselAttrs {
	carousel?: Carousel
	snapTo?: 'elements' | 'pages'
	infinite?: boolean
	tug?: number
	power?: number
	overflow?: boolean

	constructor(options?: CarouselAttrs) {
		Object.assign(this, options)
	}

	/** @internal */
	connect = (carousel: Carousel) => {
		this.carousel = carousel
	}

	get activePage() {
		if (!this.carousel) return 0
		return this.carousel.activePage
	}

	get totalPages() {
		if (!this.carousel) return 0
		return this.carousel.snaps.pages.length
	}

	has(index: number) {
		return index >= 0 && index < this.totalPages
	}

	hasNext() {
		return this.has(this.activePage + 1)
	}

	hasPrevious() {
		return this.has(this.activePage - 1)
	}

	goTo(index: number) {
		if (!this.carousel) return
		return this.has(index) && this.carousel.goTo(index)
	}

	goNext() {
		return this.goTo(this.activePage + 1)
	}

	goPrevious() {
		return this.goTo(this.activePage - 1)
	}

	isActive(childIndex: number): boolean {
		if (!this.carousel) return false
		return this.carousel.isActive(childIndex)
	}
}
