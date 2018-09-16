import m from 'mithril'
import {Component, Slider, SliderStore} from '../../dist'

import './sliderexample.less'
export class SliderExample extends Component<{slides: number}> {
	slider = new SliderStore()
	render() {
		const {slides} = this.attrs
		const items = []
		for (let i = 0; i < slides; i++) items.push(i)
		return (
			<div class="sliderexample">
				<Slider {...this.slider}>
					{items.map(i => (
						<div class="sliderexample-slide">{i}</div>
					))}
				</Slider>
				<a onclick={e => this.slider.goPrevious()}>Previous</a>
				<a onclick={e => this.slider.goNext()}>Next</a>
			</div>
		)
	}
}
