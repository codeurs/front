import './index.less'
import {
	m,
	createContext,
	View,
	Slider,
	SliderStore,
	Link,
	Route,
	parseRoute,
	Switch,
	Redirect,
	HistoryRouter,
	classes,
	ModalStore,
	Modal,
	ModalOverlay,
	Portal
} from '../../dist'

const Theme = createContext('green')

const Button = () => (
	<Theme.Consumer>{color => <button>{color}</button>}</Theme.Consumer>
)

class SliderExample extends View {
	slider = new SliderStore()
	view() {
		return (
			<div>
				<h1>@codeurs/front</h1>
				<div class="examples-slider">
					<Slider {...this.slider}>
						{[1, 2, 3, 4, 5, 6, 7].map(slide => (
							<div class="examples-slider-slide">{slide}</div>
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

const hashMatcher = (location, route) =>
	parseRoute(location.hash.substr(1), route)

const hashFormatter = path => path && `/#${path}`

const HashRouter = ({children}) =>
	m(HistoryRouter, {matcher: hashMatcher, formatPath: hashFormatter}, children)

const LanguageLink = ({lang, children}) =>
	m(Link, {to: `/${lang}`}, ({active, anchorAttrs}) =>
		m('a', {...classes({is: {active}}), ...anchorAttrs}, children)
	)

const LanguagesNav = () => 
	m(HashRouter, [
		m(LanguageLink, {lang: 'nl'}, 'Nederlands'),
		m(LanguageLink, {lang: 'en'}, 'English'),
		m(LanguageLink, {lang: 'fr'}, 'Français'),
	])
	
class ModalExample extends View {
	modal = new ModalStore()
	view() {
		return [
			m('button', {onclick: this.modal.open}, 'Open modal'),
			m(Portal, [
				m(Modal, this.modal, [
					m(ModalOverlay),
					m('.modalexample', [
						'Popup content',
						m('button', {onclick: () => this.modal.close()}, 'Close popup')
					])
				])
			])
		]
	}
}

class Examples extends View {
	view() {
		return (
			<HashRouter>
				<Switch>
					<Route
						path="/:language"
						render={({
							match: {
								params: {language}
							}
						}) => (
							<div>
								<HistoryRouter
									matcher={(location, route) =>
										hashMatcher(location, {
											...route,
											path: route.path && `/${language}${route.path}`
										})
									}
									formatPath={path => hashFormatter(`/${language}${path}`)}
									language={language}
								>
									<div>
										<LanguagesNav />
									</div>
									Language: {language}
									<nav>
										<Link to="/">Home</Link>
										<Link to="/slider">Slider</Link>
										<Link to="/other">Other</Link>
										<Link to="/modal">Modal</Link>
										<Link to="/back">Back home</Link>
									</nav>
									<Switch>
										<Route path="/slider" render={SliderExample} />
										<Route
											path="/other"
											render={() => {
												return <div>Other</div>
											}}
										/>
										<Route
											path="/back"
											render={() => {
												return (
													<div>
														Back home
														<Redirect to="/" />
													</div>
												)
											}}
										/>
										<Route path="/modal" render={ModalExample} />
										<Route render={() => <div>Match all</div>} />
									</Switch>
								</HistoryRouter>
							</div>
						)}
					/>
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

m.mount(document.getElementById('root'), Examples)
