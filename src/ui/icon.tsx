import './icon.less'

import {DOMAttrs, m} from '../hyperscript'
import {addClasses} from '../util/classes'
import {View} from './view'

export class Icon extends View<{icon: string} & DOMAttrs> {
	render() {
		const {children, icon, ...attrs} = this.attrs
		return <i class="icon" {...addClasses(attrs, {icon})} />
	}
}
