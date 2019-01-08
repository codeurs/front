import './index.less'
import {m, createContext, View, Slider, SliderStore, classes} from '../../dist'

const Theme = createContext('green')

const Button = () => (
	<Theme.Consumer>{color => <button>{color}</button>}</Theme.Consumer>
)

class Examples extends View {
	slider = new SliderStore()

	render() {
		return (
			<div>
				<h1>@codeurs/front</h1>
				<div class="examples-slider">
					<Slider {...this.slider}>
						{[1, 2, 3, 4, 5, 6, 7].map(slide => (
							<div class="examples-slider-slide">
								{slide}
							</div>
						))}
					</Slider>
				</div>
				<Button />
				<Theme.Provider value="red">
					<Button />
					<Button />
					<Theme.Provider value="blue">
						<Button />
					</Theme.Provider>
					<Button />
				</Theme.Provider>
			</div>
		)
	}
}

m.mount(document.getElementById('root'), Examples)
