import {View} from 'ui'
import {m} from '../hyperscript'

type ListenerObject = {
	add(key: string, callback: Function): () => void
	hit(key: string, ...args: Array<any>): void
}

const mods = ['a', 'b', 'c']
type ValueOf<T> = T[keyof T]
type Mod = ValueOf<typeof mods>
const a: Mod = 'g'

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
			Array.from(this.attached.keys()).filter(key => events.indexOf(key) === -1)
		)
	}
	remove(selected?: Array<string>) {
		Array.from(this.attached.keys())
			.filter(key => !selected || selected.indexOf(key) > -1)
			.forEach(event => {
				this.attached.get(event)()
				this.attached.delete(event)
			})
	}
}
