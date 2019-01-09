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
	classes
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

const HashRouter = ({children}) => (
	<HistoryRouter matcher={hashMatcher} formatPath={hashFormatter}>
		{children}
	</HistoryRouter>
)

const LanguageLink = ({lang, children}) => (
	<Link to={`/${lang}`}>
		{({active, anchorAttrs}) => (
			<a {...classes({is: {active}})} {...anchorAttrs}>
				{children}
			</a>
		)}
	</Link>
)

const LanguagesNav = () => (
	<HashRouter>
		<LanguageLink lang="nl">Nederlands</LanguageLink>
		<LanguageLink lang="en">English</LanguageLink>
		<LanguageLink lang="fr">Français</LanguageLink>
	</HashRouter>
)

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
