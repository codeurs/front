import './sliderpage.less'

import {Carousel, CarouselStore, m, View} from '@codeurs/front'

export default class SliderPage extends View {
	carousel = new CarouselStore()
	state = {
		snap: 'pages' as const,
		width: 1
	}

	render() {
		return (
			<div>
				<h1>@codeurs/front</h1>
				<input
					type="range"
					value={this.state.width}
					onInput={e =>
						this.setState({
							width: parseFloat((e.target as HTMLInputElement).value)
						})
					}
					min={0}
					max={1}
					step={0.01}
				/>
				<button
					onClick={() =>
						this.setState({
							snap: this.state.snap == 'pages' ? 'elements' : 'pages'
						})
					}
				>{`Snap to ${
					this.state.snap == 'pages' ? 'elements' : 'pages'
				}`}</button>
				<div class="sliderpage">
					<Carousel {...this.carousel} snapTo={this.state.snap}>
						{[1, 2, 3, 4, 5, 6, 7].map((slide, i) => (
							<div
								class={
									'sliderpage-slide ' +
									(this.carousel.isActive(i) ? 'is-active' : '')
								}
								style={{'min-width': this.state.width * 100 + '%'}}
							>
								{slide}
								<a
									class="sliderpage-slide-link"
									onClick={() => {
										this.carousel.goNext()
									}}
								>
									next >>
								</a>
								<a
									class="sliderpage-slide-link"
									href="https://codeurs.be"
									target="_blank"
								>
									external
								</a>
							</div>
						))}
					</Carousel>
					<Carousel>
						{...[1, 2, 3, 4, 5, 6, 7].map((slide, i) => (
							<div
								class="sliderpage-slide is-active"
								style={{'min-width': '33.33333%'}}
							>
								{slide}
								<a
									class="sliderpage-slide-link"
									onClick={() => {
										this.carousel.goNext()
									}}
								>
									next >>
								</a>
								<a
									class="sliderpage-slide-link"
									href="https://codeurs.be"
									target="_blank"
								>
									external
								</a>
							</div>
						))}
					</Carousel>
				</div>
			</div>
		)
	}
}
