import m from 'mithril'
import {randomKey} from 'util/formutils'
import {Component} from '../component'

import './radio.less'

export class Radio extends Component {
    className = this.attrs.className || (this.attrs.unstyled && 'radio') || 'radio-front'
    id = randomKey('radio_')

    view() {
        const {
            value = false,
            onchange,
            option,
            name = this.id,
            required,
            disabled
        } = this.attrs

        return m(`div.${this.className}`, [
            m(`input.${this.className}-input`, {
                type: 'radio',
                checked: value ? true : false,
                disabled: disabled && !value ? true : false,
                required,
                name: name,
                onclick: onchange && (_ => onchange(!value)),
                id: this.id
            }),
            m(`label.${this.className}-label`, {for: this.id}, [
                m(`span.${this.className}-label-bullet${disabled?'.is-readonly':''}`),
                m(`span.${this.className}-label-text`, option)
            ])
        ])
    }
}
