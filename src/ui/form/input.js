import classnames from 'classnames'
import m from 'mithril'
import {Component} from '../component'
import {getErrorMessage} from './../../util/formutils'

import './input.less'

export class Input extends Component {
    className = this.attrs.className || (this.attrs.unstyled && 'input') || 'input-front'
    inputDom = null

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
            errors
        } = this.attrs

        if(this.inputDom && this.inputDom.setCustomValidity){
            console.log(getErrorMessage(errors))
            this.inputDom.setCustomValidity(getErrorMessage(errors))
        }

        return m(`.${this.className}`, {class: classnames([modifier, value && 'has-value'])}, [
            m(`input.${this.className}-input`, {
                type,
                required,
                name,
                value,
                oncreate: (vnode) => this.inputDom = vnode.dom,
                oninput: onchange && (e => {
                    onchange(e.target.value)
                }),
                onchange: onchange && (e => onchange(e.target.value))
            }),
            label && m(`label.${this.className}-label`, label)
        ])
    }
}
