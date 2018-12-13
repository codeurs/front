import './index.less'
import m from 'mithril'
import {View} from '../../dist'

class Examples extends View {
	render() {
		return m('h1', '@codeurs/front')
	}
}

m.mount(document.getElementById('root'), Examples)
