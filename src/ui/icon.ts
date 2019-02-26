import './icon.less'

import {DOMAttrs, m} from '../hyperscript'
import {addClasses} from '../util/classes'
import {View} from './view'

export class Icon extends View<{icon: string} & DOMAttrs> {
	render() {
		const {icon} = this.attrs
		return m('i.icon', addClasses(this.attrs, {icon}))
	}
}
