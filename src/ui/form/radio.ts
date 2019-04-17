import './radio.less'

import m from 'mithril'
import {randomKey} from '../../util/formutils'
import {Component} from '../component'
import {classes} from '../../util/classes'
import {DOMAttrs} from '../../hyperscript'

export class Radio extends Component<
	{
		name: string
		value: boolean
		onchange?: (checked: boolean) => void
		option: string // Really label?
		required?: boolean
		unstyled?: boolean
		className?: string
		disabled?: boolean
	} & DOMAttrs
> {
	className =
		this.attrs.className || (this.attrs.unstyled && 'radio') || 'radio-front'
	id = randomKey('radio_')

	view() {
		const {
			value = false,
			onchange,
			option,
			name = this.id,
			required,
			disabled,
			...rest
		} = this.attrs

		return m(`div.${this.className}`, classes({is: {disabled}}), [
			m(`input.${this.className}-input`, {
				type: 'radio',
				checked: !!value,
				required,
				name: name,
				onclick: onchange && (() => onchange(!value)),
				id: this.id,
				disabled,
				...rest
			}),
			m(`label.${this.className}-label`, {for: this.id}, [
				m(`span.${this.className}-label-bullet`),
				m(`span.${this.className}-label-text`, option)
			])
		])
	}
}
