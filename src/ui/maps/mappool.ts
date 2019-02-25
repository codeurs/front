export class MapPool {
	pool: Array<google.maps.Map> = []

	create(construct: (dom: Element) => google.maps.Map) {
		const container = () => {
			const dom = document.createElement('div')
			dom.style.height = '100%'
			return dom
		}
		const instance = this.pool.length
			? (this.pool.pop() as google.maps.Map)
			: construct(container())
		return instance
	}

	release(map: google.maps.Map) {
		const dom = map.getDiv()
		if (dom.parentNode) dom.parentNode.removeChild(dom)
		this.pool.push(map)
	}
}
