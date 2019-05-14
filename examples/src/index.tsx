import './index.less'

import {
	Breakpoint,
	createContext,
	HistoryRouter,
	Image,
	ImageResizer,
	Link,
	m,
	Modal,
	ModalStore,
	parseRoute,
	Redirect,
	Route,
	Switch,
	View
} from '@codeurs/front'
import testImage from 'assets/test.jpg'
import svgImage from 'assets/test.svg'
import {render} from 'preact'
import Slider from './views/sliderpage'

//import Autocomplete from 'views/autocomplete'
//const Map = lazy(() => import('./views/map'))

const Theme = createContext('green')

const hashMatcher = (location, route) =>
	parseRoute(location.hash.substr(1), route)

const hashFormatter = path => path && `/#${path}`

const HashRouter = ({children}) => (
	<HistoryRouter matcher={hashMatcher} formatPath={hashFormatter}>
		{children}
	</HistoryRouter>
)

const LanguageLink = ({lang, children}) => (
	<Link to={`/${lang}`}>{children}</Link>
)

const LanguagesNav = () => (
	<HashRouter>
		<LanguageLink lang="nl">Nederlands</LanguageLink>
		<LanguageLink lang="en">English</LanguageLink>
		<LanguageLink lang="fr">Français</LanguageLink>
	</HashRouter>
)

class ModalExample extends View {
	modal = new ModalStore()
	render() {
		return (
			<div>
				<button onClick={this.modal.open}>Open modal</button>
				<Modal {...this.modal}>
					<div class="modalexample">
						Popup contant
						<button onClick={() => this.modal.close()}>Close popup</button>
					</div>
				</Modal>
			</div>
		)
	}
}

const Images = ({children}) => (
	<div class="images">
		<h3>Onload</h3>
		<Image
			class="images-bg"
			background
			onclick={() => {}}
			src={`https://picsum.photos/200/${Math.random() > 0.5 ? '200' : '300'}`}
			onload={console.log}
		/>

		<h3>Server resize</h3>
		<div class="images-landscape" style={{width: '400px', height: 'auto'}}>
			<ImageResizer
				resize={(attrs, container) => {
					return {...attrs}
				}}
			>
				<Image {...svgImage} />
			</ImageResizer>
		</div>
	</div>
)

const breakpoints = {
	ipadPort: '(min-width: 800px)'
}

class Examples extends View {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path="/:language">
						{({match}) => {
							const {
								params: {language}
							} = match
							return (
								<div>
									<HistoryRouter
										matcher={(location, route) =>
											hashMatcher(location, {
												...route,
												path: route.path && `/${language}${route.path}`
											})
										}
										formatPath={path => hashFormatter(`/${language}${path}`)}
									>
										<LanguagesNav />
										{`Language: ${language}`}
										<div>
											<Link class="home" to="/" exact>
												Home
											</Link>
											<Link to="/slider">Slider</Link>
											<Link to="/autocomplete">Autocomplete</Link>
											<Link to="/modal">Modal</Link>
											<Link to="/images">Images</Link>
											<Link to="/maps">Maps</Link>
											<Link to="/back">Back home</Link>
										</div>
										<Switch>
											<Route path="/slider">{Slider}</Route>
											<Route path="/autocomplete">{() => 'autocomplete'}</Route>
											<Route path="/images">{Images}</Route>
											<Route path="/back">
												{() => (
													<div>
														Back home
														<Redirect to="/" />
													</div>
												)}
											</Route>
											<Route path="/modal">{ModalExample}</Route>
											<Route path="/maps">{Map}</Route>
											<Route>
												{() => (
													<Breakpoint
														{...{
															'(max-width: 800px)': {cols: 3},
															'(min-width: 800px)': {cols: 5},
															'(min-width: 1000px)': {cols: 10}
														}}
													>
														{({cols}) => 'cols: ' + cols}
													</Breakpoint>
												)}
											</Route>
										</Switch>
									</HistoryRouter>
								</div>
							)
						}}
					</Route>
					<Route>
						{() => (
							<div>
								Choose a language:
								<LanguagesNav />
							</div>
						)}
					</Route>
				</Switch>
			</HashRouter>
		)
	}
}

render(<Examples />, document.getElementById('root'))
