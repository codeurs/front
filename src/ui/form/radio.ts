import m from 'mithril'
import {randomKey} from '../../util/formutils'
import {Component} from '../component'

import './radio.less'

export class Radio extends Component<{
	name: string
	value: boolean
	onchange?: (checked: boolean) => void
	option: string // Really label?
	required?: boolean
	unstyled?: boolean
	className?: string
}> {
	className =
		this.attrs.className || (this.attrs.unstyled && 'radio') || 'radio-front'
	id = randomKey('radio_')

	view() {
		const {
			value = false,
			onchange,
			option,
			name = this.id,
			required
		} = this.attrs

		return m(`div.${this.className}`, [
			m(`input.${this.className}-input`, {
				type: 'radio',
				checked: value ? true : false,
				required,
				name: name,
				onclick: onchange && (_ => onchange(!value)),
				id: this.id
			}),
			m(`label.${this.className}-label`, {for: this.id}, [
				m(`span.${this.className}-label-bullet`),
				m(`span.${this.className}-label-text`, option)
			])
		])
	}
}
