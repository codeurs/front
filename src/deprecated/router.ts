import jump from 'jump.js'
import m from 'mithril'

export class Router {
	transport: null | XMLHttpRequest = null
	data: any = {}

	constructor(initialState: any) {
		this.data = initialState
	}

	url() {
		return this.data.url
	}

	view(vnode: any) {
		const {href} = window.location
		const params =
			href.indexOf('?') > -1 ? m.parseQueryString(href.split('?')[1]) : {}
		const route = {href, path: window.location.pathname, params}
		return this.resolve(this.data, route)
	}

	mount(element: HTMLElement) {
		window.onpopstate = e => {
			if (e.state) {
				this.setData(e.state.data)
				m.redraw()
			} else {
				this.navigate(window.location.pathname)
			}
		}
		m.mount(element, this)
	}

	getPageTitle(data: any) {
		return data.title
	}

	setData(data: any) {
		this.data = data
		const {hash, href} = window.location
		const queryIndex = href.indexOf('?')
		const query = queryIndex > -1 ? href.substr(queryIndex) : ''
		window.history.replaceState({data}, this.getPageTitle(data))
		document.title = this.getPageTitle(data)
	}

	clear() {
		if (!this.transport) return
		this.transport.abort()
		this.transport = null
	}

	scroll(hash?: string) {
		if (hash) jump(hash)
		else window.scrollTo(0, 0)
	}

	fetch(path: string) {
		return Promise.reject('implement')
	}

	resolve(data: any, route: any) {
		throw 'implement'
	}

	navigate(path: string) {
		const {hash} = window.location
		if (path == this.url()) {
			if (hash) this.scroll(hash)
		} else {
			this.clear()
			return this.fetch(path).then(data => {
				this.setData(data)
				setTimeout(() => this.scroll(hash))
				return data
			})
		}
	}
}
