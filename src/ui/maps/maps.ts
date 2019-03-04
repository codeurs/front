import './maps.less'

import loadGoogleMapsApi from 'load-google-maps-api'
import {m} from '../../hyperscript'
import {createContext} from '../context'
import {View} from '../view'
import {EventManager} from './eventmanager'
import {MapPool} from './mappool'

export const MapsContext = createContext<google.maps.Map>()

export type MapsEvent<T> = {
	target: T
	redraw: boolean
}

export type MouseEvents<T> = {
	click?: (event?: google.maps.MouseEvent & MapsEvent<T>) => void
	dblclick?: (event?: google.maps.MouseEvent & MapsEvent<T>) => void
	rightclick?: (event?: google.maps.MouseEvent & MapsEvent<T>) => void
	mousemove?: (event?: google.maps.MouseEvent & MapsEvent<T>) => void
	mouseout?: (event?: google.maps.MouseEvent & MapsEvent<T>) => void
	mouseover?: (event?: google.maps.MouseEvent & MapsEvent<T>) => void
}

export type MapsEvents = MouseEvents<google.maps.Map> & {
	idle?: (event?: MapsEvent<google.maps.Map>) => void
	tilesloaded?: (event?: MapsEvent<google.maps.Map>) => void

	drag?: (event?: MapsEvent<google.maps.Map>) => void
	dragend?: (event?: MapsEvent<google.maps.Map>) => void
	dragstart?: (event?: MapsEvent<google.maps.Map>) => void

	bounds_changed?: (event?: MapsEvent<google.maps.Map>) => void
	center_changed?: (event?: MapsEvent<google.maps.Map>) => void
	heading_changed?: (event?: MapsEvent<google.maps.Map>) => void
	maptypeid_changed?: (event?: MapsEvent<google.maps.Map>) => void
	projection_changed?: (event?: MapsEvent<google.maps.Map>) => void
	tilt_changed?: (event?: MapsEvent<google.maps.Map>) => void
	zoom_changed?: (event?: MapsEvent<google.maps.Map>) => void
}

export class Maps extends View<
	{
		apiKey: string
		region?: string
		language?: string
		class?: string
		on?: MapsEvents
		initial?: {
			zoom?: number
			center?: google.maps.LatLng | google.maps.LatLngLiteral
		}
	} & google.maps.MapOptions
> {
	static pool = new MapPool()
	map?: google.maps.Map

	onCreate() {
		const {
			children,
			on,
			apiKey,
			region,
			language,
			class: className,
			initial = {},
			...options
		} = this.attrs
		loadGoogleMapsApi({key: apiKey, region, language})
			.then(maps => {
				const map = Maps.pool.create(dom => new maps.Map(dom))
				const {
					zoom = 7,
					center = {
						lat: 51.0030477,
						lng: 4.5000955
					}
				} = initial
				map.setOptions({zoom, center, ...options})
				if (this.dom) this.dom.appendChild(map.getDiv())
				this.onRemove = () => {
					Maps.pool.release(map)
				}
				this.map = map
			})
			.then(m.redraw)
			.catch(console.error)
	}

	render() {
		const {class: className, on, ...options} = this.attrs
		if (this.map) {
			if (options) this.map.setOptions(options)
		}
		return m('.maps',
			{className},
			this.map &&
				m(MapsContext.Provider,
					{value: this.map},
					m(EventManager,
						{
							on,
							object: this.map
						},
						this.children
					)
				)
		)
	}
}
