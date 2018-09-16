import './index.less'
import {mount} from 'mithril'
import {m, Component, createContext} from '../../dist'
import {SliderExample} from './sliderexample'

const Theme = createContext(0)

class Docs extends Component {
	count = 0
	render() {
		return (
			<div class="docs">
				<h1>@codeurs/front</h1>
				<Range value={this.count} onChange={v => (this.count = v)} />
				<h3>{this.count}</h3>
				<h2>Slider</h2>
				<div class="docs-slider">
					<SliderExample slides={this.count} />
				</div>
				<h2>Context</h2>
				<Theme.Consumer>{theme => theme}</Theme.Consumer>
				<Theme.Provider value={this.count}>
					<div>
						Theme: <Theme.Consumer>{theme => theme}</Theme.Consumer>
					</div>
				</Theme.Provider>
				<Theme.Consumer>{theme => theme}</Theme.Consumer>
			</div>
		)
	}
}

class Range extends Component<{value: number; onChange: (v: number) => any}> {
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

mount(document.getElementById('root'), Docs)
