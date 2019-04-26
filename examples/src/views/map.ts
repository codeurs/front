import './map.less'

import {m, Maps, Marker, View} from '@codeurs/front'
import {debounce} from 'throttle-debounce'

export default class Map extends View {
	markers = 1
	zoom = 4.5
	center = {lat: 50.3115184, lng: 6.3301855}

	setMapProperties = debounce(300, e => {
		let redraw = false
		const map = e.target
		const zoomLevel = map.getZoom()
    if (zoomLevel !== this.zoom) {
			redraw = true
			this.zoom = zoomLevel
    }
    const center = map.getCenter()
    if (!center.equals(new google.maps.LatLng(
			this.center.lat, this.center.lng
		))) {
			redraw = true
			this.center = center.toJSON()
		}
		if (redraw) m.redraw()
	})

	changeMapProperty = e => {
		e.redraw = false
		this.setMapProperties(e)
	}

	render() {
		return m('.map',
			m('label', 
				'Add markers: ',
				m('input[type=range]', {
					value: this.markers,
					min: 1, max: 50,
					step: 1,
					oninput: e => this.markers = parseInt(e.target.value, 10)
				})
			),
			m('label', 
				'Zoom: ',
				m('input[type=range]', {
					value: this.zoom,
					min: 1, max: 15,
					step: 1,
					oninput: e => this.zoom = parseFloat(e.target.value)
				})
			),
			m('.map-maps',
				m(Maps,
					{
						apiKey: 'AIzaSyDSOLxTZy_56sksxVCD970SpqJPFxXe5Ok',
						center: this.center,
						zoom: this.zoom,
						disableDefaultUI: true,
						on: {
							center_changed: this.changeMapProperty,
							zoom_changed: this.changeMapProperty
						}
					},
					Array.from(Array(this.markers))
						.map((_, i) =>
							m(Marker, {
								position: {
									lat: this.center.lat,
									lng: this.center.lng + i * 1.5
								},
								on: {
									click: () => console.log(i)
								}
							})
						)
				)
			)
		)
	}
}