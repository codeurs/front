import {m} from '../../hyperscript'
import {View} from '../view'
import {EventManager} from './eventmanager'
import {MapsContext, MapsEvent, MouseEvents} from './maps'

export type MarkerEvents = MouseEvents<google.maps.Marker> & {
	mousedown?: (
		event?: google.maps.MouseEvent & MapsEvent<google.maps.Marker>
	) => void
	mouseup?: (
		event?: google.maps.MouseEvent & MapsEvent<google.maps.Marker>
	) => void

	drag?: (
		event?: google.maps.MouseEvent & MapsEvent<google.maps.Marker>
	) => void
	dragend?: (
		event?: google.maps.MouseEvent & MapsEvent<google.maps.Marker>
	) => void
	dragstart?: (
		event?: google.maps.MouseEvent & MapsEvent<google.maps.Marker>
	) => void

	draggable_changed?: (event?: MapsEvent<google.maps.Marker>) => void
	animation_changed?: (event?: MapsEvent<google.maps.Marker>) => void
	clickable_changed?: (event?: MapsEvent<google.maps.Marker>) => void
	cursor_changed?: (event?: MapsEvent<google.maps.Marker>) => void
	flat_changed?: (event?: MapsEvent<google.maps.Marker>) => void
	icon_changed?: (event?: MapsEvent<google.maps.Marker>) => void
	position_changed?: (event?: MapsEvent<google.maps.Marker>) => void
	shape_changed?: (event?: MapsEvent<google.maps.Marker>) => void
	title_changed?: (event?: MapsEvent<google.maps.Marker>) => void
	visible_changed?: (event?: MapsEvent<google.maps.Marker>) => void
	zindex_changed?: (event?: MapsEvent<google.maps.Marker>) => void
}

export class Marker extends View<
	google.maps.MarkerOptions & {
		on?: MarkerEvents
	}
> {
	marker?: google.maps.Marker
	onRemove() {
		if (this.marker) this.marker.setMap(null)
	}
	render() {
		const {children, on, ...options} = this.attrs
		return m(MapsContext.Consumer, (map?: google.maps.Map) => {
			if (!map) throw 'No Maps parent detected'
			if (this.marker) this.marker.setOptions(options)
			else this.marker = new google.maps.Marker({map, ...options})
			return m(EventManager,
				{
					on,
					object: this.marker
				},
				this.children
			)
		})
	}
}
