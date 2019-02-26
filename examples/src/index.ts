import './index.less'

import {
    addClasses, Breakpoint, classes, Component, createContext, HistoryRouter, Image, ImageResizer,
    lazy, Link, m, Modal, ModalOverlay, ModalStore, parseRoute, Portal, Redirect, Route, styled,
    Switch, View
} from '@codeurs/front'
import testImage from 'assets/test.jpg'
import svgImage from 'assets/test.svg'
import classNames from 'classnames'

const Map = lazy(() => import('./views/map'))

const Theme = createContext('green')

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
	render() {
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

const Images = ({children}) => 
	m('.images', 
		m('h3', 'Server resize'),
		m('.images-landscape', {style: {width: '400px', height: 'auto'}}, 
			m(ImageResizer, {
				resize: (attrs, container) => {
					console.log(attrs, container)
					return {...attrs}
				}
			}, 
				m(Image, svgImage)
			)
		),
		m('h3', 'No crop'),
		m('.images-landscape', {style: {width: '400px', height: 'auto'}}, 
			m(Image, svgImage)
		),
		m('.images-portrait',
			m(Image, testImage)
		), 
		m('h3', 'Cover'),
		m('.images-landscape',
			m(Image, {
				alt: 'ok',
				fit: 'cover',
				src: 'https://picsum.photos/600/200'
			})
		),
		m('.images-portrait', 
			m(Image, {
				fit: 'cover',
				width: 200,
				height: 100,
				src: 'https://picsum.photos/200/100'
			})
		), 
		m('.images-portrait', 
			m(Image, {
				fit: 'cover',
				position: {x: .8, y: .8},
				src: 'https://picsum.photos/800/400'
			})
		), 
		m('h3', 'Contain'),
		m('.images-landscape',
			m(Image, {
				fit: 'contain',
				src: 'https://picsum.photos/600/200'
			})
		),
		m('.images-portrait', 
			m(Image, {
				fit: 'contain',
				src: 'https://picsum.photos/600/200'
			})
		),
		m('h3', 'Fixed height'),
		m('.images-fixedheight', [
			m(Image, {
				fit: 'portrait',
				src: 'https://picsum.photos/600/200'
			}),
			m(Image, {
				fit: 'portrait',
				src: 'https://picsum.photos/300/300'
			}),
			m(Image, {
				fit: 'portrait',
				src: 'https://picsum.photos/100/200'
			})
		])
	)

const Nav = styled('nav')`
	background: red; 
`

const Nav2 = styled(Nav)`
	color: white;
`

const Nav3 = styled(Nav2)`
	color: blue;
`

const A = styled(Link)`
	color: inherit;
	${attrs => attrs.to === '/' && `
		color: gold;
	`}
	&:hover {
		color: yellow;
	}
`
const breakpoints = {
	ipadPort: '(min-width: 800px)'
}

const Slider = lazy(() => import('./views/sliderpage'))


class Examples extends View {
	render() {
		return m(HashRouter, 
			m(Switch, [
				m(Route, {
					path: '/:language',
				}, ({match}) => {
					const {params: {language}} = match
					return m('', [
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
							m(Nav3, {as: 'div'}, [
								m(A, {to: '/'}, 'Home'),
								m(A, {to: '/slider'}, 'Slider'),
								m(A, {to: '/other'}, 'Other'),
								m(A, {to: '/modal'}, 'Modal'),
								m(A, {to: '/images'}, 'Images'),
								m(A, {to: '/maps'}, 'Maps'),
								m(A, {to: '/back'}, 'Back home')
							]),
							m(Switch, [
								m(Route, {path: '/slider'}, Slider),
								m(Route, {path: '/other'}, () => m('', 'Other')),
								m(Route, {path: '/images'}, Images),
								m(Route, {path: '/back'},
									() => m('', [
										'Back home',
										m(Redirect, {to: '/'})
									])
								),
								m(Route, {path: '/modal'}, ModalExample),
								m(Route, {path: '/maps'}, Map),
								m(Route, () => [
									m(Breakpoint, {
										'(max-width: 800px)': {cols: 3},
										'(min-width: 800px)': {cols: 5},
										'(min-width: 1000px)': {cols: 10}
									}, ({cols}) => m('', 'cols: '+cols))
								])
							])
						])
					])
				}
				),
				m(Route, () => m('', 
					'Choose a language:',
					m(LanguagesNav)
				))
			])
		)
	}
}

m.mount(document.getElementById('root'), Examples)