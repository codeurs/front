import classnames from 'classnames'
import m from 'mithril'
import {Component} from '../component'

import './input.less'

export class Input extends Component {
    className = this.attrs.className || (this.attrs.unstyled && 'input') || 'input-front'

    view() {
        const {
            value,
            onchange,
            label,
            name,
            modifier,
            onfocus,
            type = 'text',
            required
        } = this.attrs

        return m(`.${this.className}`, {class: classnames([modifier, value && 'has-value'])}, [
            m(`input.${this.className}-input`, {
                type,
                required,
                name,
                onfocus,
                value,
                oninput: onchange && (e => onchange(e.target.value)),
                onchange: onchange && (e => onchange(e.target.value))
            }),
            label && m(`label.${this.className}-label`, label)
        ])
    }
}
