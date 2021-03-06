import m from 'mithril'
import {cleanupOptions, randomKey} from '../../util/formutils'
import {Component} from '../component'
import {Radio} from './radio'
import {DOMAttrs} from '../../hyperscript'

export class Radios extends Component<{
	name: string
	unstyled?: boolean
	className?: string
	value: string
	label?: string
	modifier?: any
	required?: boolean
	options:
		| Array<{key: string; label: string} & DOMAttrs>
		| {[key: string]: string}
	onchange?: (v: string) => void
	onfocus?: (e: Event) => void
}> {
	className =
		this.attrs.className || (this.attrs.unstyled && 'radios') || 'radios-front'
	defaultKey = randomKey('radios_')

	view() {
		const {
			value,
			onchange,
			options,
			unstyled,
			name = this.defaultKey,
			required
		} = this.attrs

		const cleanOptions = cleanupOptions(options)

		return m(`div.${this.className}`,
			cleanOptions.map(({key, label, ...rest}) =>
				m(Radio, {
					option: label,
					name: name,
					unstyled,
					required,
					value: value == key,
					onchange: onchange && (() => onchange(key)),
					...rest
				})
			)
		)
	}
}
