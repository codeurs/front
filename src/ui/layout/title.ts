import './title.less'
import {Children} from 'mithril'
import {m} from '../../hyperscript'
import {Component} from '../component'
import {widget} from './widget'

@widget
export class Title extends Component<{
	heading?: number
}> {
	render(): Children {
		const {children, heading = 1, ...attrs} = this.attrs
		const tag = `h${heading}`
		return m(`${tag}.title`, attrs, children)
	}
}