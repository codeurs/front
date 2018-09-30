import './index.less'
import mount from 'mithril/mount'
import {m, Component, Title, Theme} from '../../dist'
//import {SliderExample} from './sliderexample'

class Docs extends Component {
	count = 0
	render() {
		return (
			<Theme theme={theme => ({...theme, Title: () => 'title replaced'})}>
				<div class="docs">
					<Title>@codeurs/front</Title>
					<Range value={this.count} onChange={v => (this.count = v)} />
					<Title heading={3}>{this.count}</Title>

					<Theme theme={theme => theme}>
						<Title heading={2}>Slider</Title>
					</Theme>
					<div class="docs-slider">
						{/*<SliderExample slides={this.count} />*/}
					</div>
				</div>
			</Theme>
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
