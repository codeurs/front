import './select.less'

import classnames from 'classnames'
import m from 'mithril'
import {cleanupOptions} from '../../util/formutils'
import {Component} from '../component'

export class Select extends Component<{
	name: string
	unstyled?: boolean
	className?: string
	value: string
	label?: string
	modifier?: any
	required?: boolean
	options: Array<{key: string; label: string}> | {[key: string]: string}
	onchange?: (v: string) => void
	onfocus?: (e: Event) => void
}> {
	className =
		this.attrs.className || (this.attrs.unstyled && 'select') || 'select-front'

	view() {
		const {
			value,
			onchange,
			label,
			name,
			options,
			modifier,
			onfocus,
			required = true
		} = this.attrs

		const cleanOptions = cleanupOptions(options)
		const fullLabel = required ? label + ' *' : label

		return m(`select.${this.className}`,
			{
				class: classnames([modifier, value && 'has-value']),
				name,
				required,
				onfocus,
				onchange: onchange && (e => onchange(e.target.value)),
				oninput: onchange && (e => onchange(e.target.value))
			},
			[
				label && m('option[disabled]', {selected: !value}, fullLabel),
				cleanOptions.map(o =>
					m('option', {value: o.key, selected: o.key == value}, o.label)
				)
			]
		)
	}
}
