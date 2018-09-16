import m from 'mithril'
import {Component, Slider, SliderStore} from '../../src'

import './sliderexample.less'
export class SliderExample extends Component<{slides: number}> {
  slider = new SliderStore()
  render() {
		const {slides} = this.attrs
		const items = []
		for (let i = 0; i < slides; i++) items.push(i)
    return m('.sliderexample', [
      m(Slider, this.slider, items.map(i => 
				m('.sliderexample-slide', i)
			)),
      m('a', {onclick: e => this.slider.goPrevious()}, 'Previous'),
      m('a', {onclick: e => this.slider.goNext()}, 'Next')
    ])
  }
}