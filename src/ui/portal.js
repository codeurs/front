import m from 'mithril'
import {Component} from './component'
import redraw from 'mithril/redraw'

export class Portal extends Component {
  node = document.createElement('div')

  oncreate(vnode) {
    document.body.appendChild(this.node)
    redraw.subscribe(this.node, m.redraw)
    this.onupdate(vnode)
  }

  onupdate() {
    redraw.render(this.node, this.children)
  }

  onremove() {
    redraw.render(this.node, [])
    redraw.unsubscribe(this.node)
    document.body.removeChild(this.node)
  }

  view() {
    return null
  }
}
