import m from 'mithril'
import {randomKey} from '../../util/formutils'
import {Component} from '../component'

import './checkbox.less'

export class Checkbox extends Component<{
	name?: string
	unstyled?: boolean
	className?: string
	value: string | boolean
	label?: string
	required?: boolean
	onchange?: (v: boolean) => void
}> {
	className =
		this.attrs.className ||
		(this.attrs.unstyled && 'checkbox') ||
		'checkbox-front'
	id = randomKey('check_')

	view() {
		const {value, onchange, label, name = this.id, required} = this.attrs

		return m(`div.${this.className}`, [
			m(`input.${this.className}-input`, {
				type: 'checkbox',
				name,
				id: this.id,
				checked: value ? true : false,
				onclick: onchange && (() => onchange(!value)),
				required
			}),
			m(`label.${this.className}-label`,
				{for: this.id},
				m(`span.${this.className}-label-square`),
				m(`span.${this.className}-label-text`, label)
			)
		])
	}
}
