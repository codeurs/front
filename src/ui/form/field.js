import m from 'mithril'
import classnames from 'classnames'
import {Component} from '../component'

import './field.less'

export default class Field extends Component {
    className = this.attrs.unstyled ? 'field' : 'field-front'

    view() {
        const {
            errors,
            id,
            required,
            width = 1.0
        } = this.attrs

        const style = {width: `${width * 100}%`}
        const hasErrors = errors !== undefined
        const classes = [
            hasErrors && 'has-error',
            required && 'is-required'
        ]

        return m(`div.${this.className}`, {class: classnames(classes), style, id}, [
            this.viewLabel(),
            this.children,
            this.viewErrors()
        ])
    }

    viewLabel(){
        const {label} = this.attrs
        if(!label) return

        return m(`div.${this.className}-label`, label)
    }

    viewErrors(){
        const {errors} = this.attrs
        const hasErrors = errors !== undefined

        if(!hasErrors) return

        return m(`div.${this.className}-errormsg`, this.getMessage())
    }

    getMessage() {
        const {errors} = this.attrs
        const errorsList = typeof errors == 'string' ? [errors] : errors

        if (errorsList.length) return errorsList[0]
        return 'This value is not valid'
    }
}
