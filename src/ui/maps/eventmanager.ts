import {ListenerCache} from '../../util/listenercache'
import {View} from '../view'

export class EventManager extends View<{
	object: google.maps.MVCObject
	on?: {[key: string]: any}
}> {
	events!: ListenerCache
	onInit = this.createCache
	onBeforeUpdate = this.attachEvents

	createCache() {
		const {object} = this.attrs
		this.events = new ListenerCache({
			add: (key, listener) => {
				const dissolve = object.addListener(key, listener)
				return () => google.maps.event.removeListener(dissolve)
			},
			hit: (key, event) => {
				const {on = {}} = this.attrs
				event.target = object
				if (on && key in on) on[key](event)
			}
		})
		this.attachEvents()
	}

	attachEvents() {
		const {on = {}} = this.attrs
		this.events.attach(Object.keys(on))
	}

	onRemove() {
		this.events.remove()
	}

	render() {
		return this.children
	}
}
