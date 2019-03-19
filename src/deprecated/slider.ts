import './slider.less'

import {CarouselStore} from '../store/carouselstore'

export {Carousel as Slider} from '../ui/carousel'

// Backwards compatibility
export class SliderStore extends CarouselStore {
	className = 'slider'
	
	index() {
		return this.activePage
	}

	total() {
		return this.totalPages
	}
	
	actives() {
		if (!this.carousel) return []
		return this.carousel.snaps.elements.map((_, i) =>
			() => this.isActive(i)
		)
	}

	//animating = stream(false)
}