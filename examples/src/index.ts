import './index.less'
import m, {Children} from 'mithril'
import {createContext, Component, Slider, SliderStore, classes} from '../../dist'

const theme = createContext('green')

class Button extends Component {
	view() {
		return m(theme.Consumer, color => [
			m('button', {color}, color)
		])
	}
} 

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
			),
			m(Button),
			m(theme.Provider, {value: 'red'}, [
				m(Button),
				m(Button),
				m(theme.Provider, {value: 'blue'}, [
					m(Button)
				]),
				m(Button)
			])
		]
	}
}

m.mount(document.getElementById('root'), Examples)
