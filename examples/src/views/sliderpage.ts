import './sliderpage.less'

import {
	Carousel, CarouselStore, m, Slider, SliderStore, View
} from '@codeurs/front'

export default class SliderPage extends View {
	slider = new SliderStore()
	carousel = new CarouselStore()

	state = {
		snap: 'pages' as const,
		width: 1
	}

	render() {
		const {snap, width} = this.state
		return m('div', [
			m('h1', '@codeurs/front'),
			m('input[type=range]', {
				value: width,
				oninput: e => this.setState({width: parseFloat(e.target.value)}),
				min: 0,
				max: 1,
				step: .01
			}),
			m('button', {
				onclick: () => this.setState({snap: snap == 'pages' ? 'elements': 'pages'})
			}, `Snap to ${snap == 'pages' ? 'elements': 'pages'}`),
			m('.sliderpage', 
				m(Carousel, {...this.carousel, touchpadSupport: false, snapTo: snap}, 
					[1, 2, 3, 4, 5, 6, 7].map((slide, i) => 
						m('.sliderpage-slide', {
							//onclick: () => alert('ok'),
							className: this.carousel.isActive(i) && 'is-active',
							style: {'min-width': width * 100 + '%'}
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
				),
				m(Carousel, 
					[1, 2, 3, 4, 5, 6, 7].map((slide, i) => 
						m('.sliderpage-slide', {
							className: 'is-active',
							style: {'min-width': '33.33333%'}
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
				)
			)
		])
	}
}