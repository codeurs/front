import classnames from 'classnames'
import m from 'mithril'
import {Component} from '../component'

import './textarea.less'

export class Textarea extends Component<{
	name: string,
	unstyled?: boolean,
	className?: string,
	value: string,
	label?: string,
	modifier?: any,
	required?: boolean,
	onchange?: (v: string) => void,
	onfocus?: (e: Event) => void
}> {
	className =
		this.attrs.className ||
		(this.attrs.unstyled && 'textarea') ||
		'textarea-front'

	view() {
		const {
			value,
			onchange,
			label,
			modifier,
			name,
			required,
			onfocus
		} = this.attrs

		return m(
			`div.${this.className}`,
			{class: classnames([modifier, value && 'has-value'])},
			[
				m(`textarea.${this.className}-textarea`, {
					required,
					name,
					onfocus,
					value,
					oninput: onchange && (e => onchange(e.target.value)),
					onchange: onchange && (e => onchange(e.target.value))
				}),
				label && m(`label.${this.className}-label`, label)
			]
		)
	}
}
