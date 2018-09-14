import m from 'mithril'
import {Component} from './component'

import './image.less'
export class Image extends Component<any> {
	render() {
		return m('img.image', this.attrs)
	}
}
