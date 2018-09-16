import './title.less'
import m from 'mithril'
import {Component} from '../component'
import {widget} from './widget'

@widget
export class Title extends Component<{
	heading?: number
}> {
	render() {
		const {children, heading = 1, ...attrs} = this.attrs
		const tag = `h${heading}`
		return m(`${tag}.title`, attrs, children)
	}
}