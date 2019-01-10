import {m} from 'mithril-es'
import {Options, cleanupOptions} from '../../util/formutils'
import {Component} from './../component'
import {Checkbox} from './checkbox'
import './boxes.less'

export class Boxes extends Component<{
	name: string
	unstyled?: boolean
	className?: string
	value: Array<string>
	label?: string
	modifier?: any
	required?: boolean
	options: Options
	onchange?: (v: Array<string>) => void
	onfocus?: (e: Event) => void
}> {
	className =
		this.attrs.className || (this.attrs.unstyled && 'boxes') || 'boxes-front'

	setValue(key, active) {
		const {value = [], onchange} = this.attrs

		if (active) {
			if (!value.find(v => v == key)) onchange([...value, key])
			else onchange(value)
		} else {
			onchange(value.filter(v => v != key))
		}
	}

	view() {
		const {value = [], options, unstyled, required} = this.attrs
		const cleanOptions = cleanupOptions(options)
		const half = Math.ceil(cleanOptions.length / 2)

		return m(`div.${this.className}`, [
			m(`div.${this.className}-left`, [
				cleanOptions.slice(0, half).map(o =>
					m(Checkbox, {
						unstyled,
						required: required && value.length == 0,
						value: value.find(v => v == o.key),
						onchange: d => this.setValue(o.key, d),
						label: o.label
					})
				)
			]),
			m(`.${this.className}-right`, [
				cleanOptions.slice(half).map(o =>
					m(Checkbox, {
						unstyled,
						required: required && value.length == 0,
						value: value.find(v => v == o.key),
						onchange: d => this.setValue(o.key, d),
						label: o.label
					})
				)
			])
		])
	}
}
