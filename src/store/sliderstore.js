import stream from 'mithril/stream'

function contains(total, index) {
	return index >= 0 && index < total
}

/**
 * index: Stream<number>
 * total: Stream<number>
 * ?actives: Stream<Array<number => boolean>>
 */
export class SliderStore {
	index = stream(0)
	total = stream(0)
	actives = stream([])

	has(index) {
		return contains(this.total(), index)
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