import m from 'mithril'
import './index.less'
import {Router, Component} from './../../src'

class Test extends Component {
  view() {
    return m('.test', 'Todo')
  }
}

m.mount(document.getElementById('root'), Test)