import './input.less'

import classnames from 'classnames'
import m from 'mithril'
import {getErrorMessage} from '../../util/formutils'
import {Component} from '../component'

export class Input extends Component<{
	name: string
	type?: string
	unstyled?: boolean
	className?: string
	value: string
	label?: string
	modifier?: any
	required?: boolean
	disabled?: boolean
	options: Array<{key: string; label: string}> | {[key: string]: string}
	onchange?: (v: string) => void
	onfocus?: (e: Event) => void
	placeholder?: string
}> {
	className =
		this.attrs.className || (this.attrs.unstyled && 'input') || 'input-front'
	inputDom: null | HTMLElement = null

	view() {
		const {
			value,
			onchange,
			label,
			name,
			modifier,
			onfocus,
			type = 'text',
			required,
			disabled,
			placeholder
		} = this.attrs

		return m(`.${this.className}`,
			{class: classnames([modifier, value && 'has-value'])},
			[
				m(`input.${this.className}-input`, {
					type,
					required,
					disabled,
					name,
					value,
					placeholder,
					onfocus,
					oncreate: vnode => (this.inputDom = vnode.dom as HTMLElement),
					oninput: onchange && ((e: any) => onchange(e.target.value)),
					onchange: onchange && ((e: any) => onchange(e.target.value))
				}),
				label && m(`label.${this.className}-label`, label)
			]
		)
	}
}
