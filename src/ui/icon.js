import m from 'mithril'
import {Component} from './component'
import classnames from 'classnames'

import './icon.less'
export class Icon extends Component {
	view() {
		const {icon, class: className} = this.attrs
		return m('i.icon', {class: classnames(`icon-${icon}`, className)})
	}
}