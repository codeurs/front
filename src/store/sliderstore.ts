import stream from 'mithril/stream'

/**
 * index: Stream<number>
 * total: Stream<number>
 * ?actives: Stream<Array<number => boolean>>
 */
export class SliderStore {
	index = stream(0)
	total = stream(0)
	actives = stream([])
	animating = stream(false)

	has(index) {
		return index >= 0 && index < this.total()
	}

	hasNext() {
		return this.has(this.index() + 1)
	}

	hasPrevious() {
		return this.has(this.index() - 1)
	}

	goTo(index) {
		return this.has(index) && (this.index(index), true)
	}

	goNext() {
		return this.goTo(this.index() + 1)
	}

	goPrevious() {
		return this.goTo(this.index() - 1)
	}

	isActive(childIndex) {
		return this.actives()[childIndex] && this.actives()[childIndex]()
	}
}