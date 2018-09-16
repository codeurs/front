import m from 'mithril'
import './index.less'
import {Router, Component, Slider} from '../../src'
import {SliderExample} from './sliderexample'

class Docs extends Component {
	count = 0
  render() {
		const items = []
		for (let i = 0; i < this.count; i++) items.push(i)
    return m('.docs', [
			m('h1', '@codeurs/front'),
			m('', 'docs... todo'),
			m(Range, {
				value: this.count,
				onChange: v => this.count = v
			}),
			m('h3', this.count),
			m('h2', 'Slider'),  
			m('.docs-slider', [
				m(SliderExample, {slides: this.count})
			])
		])
  }
}

class Range extends Component<{value: number, onChange: (v: number) => any}> {
	render() {
		const {value, onChange} = this.attrs
		return m('input[type=range]', {
			value,
			min: 0,
			max: 50,
			oninput: e => onChange(e.target.value)
		})
	}
}

m.mount(document.getElementById('root'), Docs)