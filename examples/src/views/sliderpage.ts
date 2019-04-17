import './sliderpage.less'

import {
	Carousel, CarouselStore, m, Slider, SliderStore, View
} from '@codeurs/front'

export default class SliderPage extends View {
	snap: 'pages' | 'elements' = 'pages'
	width = 1
	slider = new SliderStore()
	carousel = new CarouselStore()

	render() {
		return m('div', [
			m('h1', '@codeurs/front'),
			m('input[type=range]', {
				value: this.width,
				oninput: e => this.width = parseFloat(e.target.value),
				min: 0,
				max: 1,
				step: .01
			}),
			m('button', {
				onclick: () => this.snap = this.snap == 'pages' ? 'elements': 'pages'
			}, `Snap to ${this.snap == 'pages' ? 'elements': 'pages'}`),
			m('.sliderpage', 
				m(Carousel, {...this.carousel, snapTo: this.snap}, 
					[1, 2, 3, 4, 5, 6, 7].map((slide, i) => 
						m('.sliderpage-slide', {
							//onclick: () => alert('ok'),
							className: this.carousel.isActive(i) && 'is-active',
							style: {'min-width': this.width * 100 + '%'}
						}, [
							slide,
							m('a.sliderpage-slide-link', {
								onclick: () => {
									this.carousel.goNext()
								}
							}, 'next >>'),
							m('a.sliderpage-slide-link', {
								href: 'https://codeurs.be',
								target: '_blank'
							}, 'external')
						])
					)
			))
		])
	}
}