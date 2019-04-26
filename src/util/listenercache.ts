import from from 'core-js-pure/stable/array/from'
import {m} from '../hyperscript'
import {View} from '../ui/view'

type ListenerObject = {
	add(key: string, callback: (...args: Array<any>) => void): () => void
	hit(key: string, ...args: Array<any>): void
}

export class ListenerCache {
	attached = new Map()

	constructor(protected object: ListenerObject) {}

	attach(events: Array<string>) {
		events.forEach(key => {
			if (this.attached.has(key)) return
			this.attached.set(
				key,
				this.object.add(key, (event = {redraw: true}) => {
					event.redraw = true
					this.object.hit(key, event)
					if (event.redraw) m.redraw()
				})
			)
		})
		this.remove(
			from(this.attached.keys()).filter(key => events.indexOf(key) === -1)
		)
	}

	remove(selected?: Array<string>) {
		from(this.attached.keys())
			.filter(key => !selected || selected.indexOf(key) > -1)
			.forEach(event => {
				this.attached.get(event)()
				this.attached.delete(event)
			})
	}
}
