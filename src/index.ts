import './index.less'
import m, {Children} from 'mithril'
import {Component, Slider, SliderStore, classes} from '../../dist'

class Examples extends Component {
	slider = new SliderStore()

	view() {
		return [
			m('h1', '@codeurs/front'),
			m('.examples-slider',
				{
					oncreate: ({dom}) =>
						this.slider.animating.map(toggle =>
							dom.classList.toggle('is-animating', toggle)
						)
				},
				m(Slider,
					this.slider,
					[1, 2, 3, 4, 5, 6, 7].map(slide =>
						m('.examples-slider-slide',
							classes({is: {animating: this.slider.animating()}}),
							slide
						)
					)
				)
			)
		]
	}
}

m.mount(document.getElementById('root'), Examples)
