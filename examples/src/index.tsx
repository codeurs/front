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

const Button = () => 
	m(Theme.Consumer, color => m('button', color))

class SliderExample extends View {
	slider = new SliderStore()
	view() {
		return m('div', [
			m('h1', '@codeurs/front'),
			m('.examples-slider', 
				m(Slider, this.slider, 
					[1, 2, 3, 4, 5, 6, 7].map(slide => 
						m('.examples-slider-slide', slide)
					)
				)
			),
			m(Button),
			m(Theme.Provider, {value: 'red'}, [
				m(Button),
				m(Button),
				m(Theme.Provider, {value: 'blue'}, 
					m(Button)
				),
				m(Button)
			])
		])
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
		return m(HashRouter, 
			m(Switch, [
				m(Route, {
					path: '/:language',
					render: ({
						match: {
							params: {language}
						}
					}) => m('', [
						m(HistoryRouter, {
							matcher: (location, route) =>
							hashMatcher(location, {
								...route,
								path: route.path && `/${language}${route.path}`
							}),
							formatPath: path => hashFormatter(`/${language}${path}`)
						}, [
							m('', m(LanguagesNav)),
							`Language: ${language}`,
							m('nav', [
								m(Link, {to: '/'}, 'Home'),
								m(Link, {to: '/slider'}, 'Slider'),
								m(Link, {to: '/other'}, 'Other'),
								m(Link, {to: '/modal'}, 'Modal'),
								m(Link, {to: '/back'}, 'Back home')
							]),
							m(Switch, [
								m(Route, {path: '/slider'}, SliderExample),
								m(Route, {path: '/other'}, () => m('', 'Other')),
								m(Route, {path: '/back'},
									() => m('', [
										'Back home',
										m(Redirect, {to: '/'})
									])
								),
								m(Route, {path: '/modal'}, ModalExample),
								m(Route, () => m('', 'Match all'))
							])
						])
					])
				}),
				m(Route, () => m('', 
					'Choose a language:',
					m(LanguagesNav)
				))
			])
		)
	}
}

m.mount(document.getElementById('root'), Examples)
