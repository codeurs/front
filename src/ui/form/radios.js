import m from 'mithril'
import {cleanupOptions, randomKey} from '../../util/formutils'
import {Component} from '../component'
import {Radio} from './radio'

export class Radios extends Component {
    className = this.attrs.className || (this.attrs.unstyled && 'radios') || 'radios-front'
	defaultKey = randomKey('radios_')

	view() {
		const {
			value,
            onchange,
            options,
            unstyled,
			name = this.defaultKey,
			required,
            disabled
		} = this.attrs

		const cleanOptions = cleanupOptions(options)

		return m(`div.${this.className}`,
			cleanOptions.map(option =>
				m(Radio, {
					option: option.label,
					name: name,
                    unstyled,
                    disabled,
					required,
					value: value == option.key,
					onchange: onchange && (_ => onchange(option.key))
				})
			)
		)
	}
}
