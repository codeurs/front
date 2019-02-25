import {m, Slider, SliderStore, View} from '@codeurs/front'

export default class SliderPage extends View {
	slider = new SliderStore()
	render() {
		return m('div', [
			m('h1', '@codeurs/front'),
			m('.examples-slider', 
				m(Slider, this.slider, 
					[1, 2, 3, 4, 5, 6, 7].map(slide => 
						m('.examples-slider-slide', slide)
					)
				)
			)
		])
	}
}