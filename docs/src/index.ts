import m from 'mithril'
import './index.less'
import {Router, Component, Slider} from '../../src'

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
			m('div', items.map(i => 
				m(Range, {
					value: i,
					onChange: v => this.count = v
				})
			))
			/*m('h2', 'Slider'),  
			m('.docs-slider', [
				m(Slider, [
					'ok'
				])
			])*/
		])
  }
}

class Range extends Component<{value: number, onChange: (v: number) => any}> {
	render() {
		const {value, onChange} = this.attrs
		return m('input[type=range]', {
			value,
			min: 0,
			max: 500,
			oninput: e => onChange(e.target.value)
		})
	}
}

class Row extends Component<{index: number}> {
	render() {
		const {index} = this.attrs
		return index
	}
}

m.mount(document.getElementById('root'), Docs)