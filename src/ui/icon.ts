import './icon.less'

import m from 'mithril'
import {Component} from './component'
import classnames from 'classnames'

export class Icon extends Component<{
	icon: string
	class?: any
}> {
	view() {
		const {icon, class: className} = this.attrs
		return m('i.icon', {class: classnames(`icon-${icon}`, className)})
	}
}
