import './image.less'

import m from 'mithril'
import {Component} from './component'

export class Image extends Component<any> {
	view() {
		return m('img.image', this.attrs)
	}
}
