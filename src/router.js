import m from 'mithril'
import jump from 'jump.js'

export class Router {
  transport = null
  data = {}

  constructor(initialState) {
    this.data = initialState
  }

  get url() {
    return this.data.url
  }

  view(vnode) {
    const {href} = window.location
    const params =
      href.indexOf('?') > -1 ? m.parseQueryString(href.split('?')[1]) : {}
    const route = {href, path: window.location.pathname, params}
    return this.resolve(this.data, route)
  }

  mount(element) {
    window.onpopstate = e => {
      if (e.state) {
        this.setData(e.state.data, true)
        m.redraw()
      } else {
        this.navigate(window.location.pathname)
      }
    }
    m.mount(element, this)
  }

  getPageTitle(data) {
    return data.title
  }

  setData(data) {
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

  scroll(hash) {
    if (hash) jump(hash)
    else window.scrollTo(0, 0)
  }

  fetch(path) {
    return Promise.reject('implement')
  }

  resolve(data, route) {
    throw 'implement'
  }

  navigate(path) {
    const {hash} = window.location
    if (path == this.url) {
      if (hash) this.scroll(hash)
    } else {
      this.clear()
      return this.fetch(path).then(data => {
        this.setData(data)
        setTimeout(() => this.scroll(hash))
        m.redraw()
        return data
      })
    }
  }
}
