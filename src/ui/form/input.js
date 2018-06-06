import classnames from 'classnames'
import m from 'mithril'
import {Component} from '../component'
import {getErrorMessage} from '../../util/formutils'

import './input.less'

export class Input extends Component {
  className = this.attrs.className ||
    (this.attrs.unstyled && 'input') ||
    'input-front'
  inputDom = null

  onupdate() {
    const {errors} = this.attrs
    //TODO: fixen
    //if (this.inputDom && this.inputDom.setCustomValidity)
    //  this.inputDom.setCustomValidity(getErrorMessage(errors))
  }

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
      placeholder
    } = this.attrs

    return m(`.${this.className}`,
      {class: classnames([modifier, value && 'has-value'])},
      [
        m(`input.${this.className}-input`, {
          type,
          required,
          name,
          value,
          placeholder,
          oncreate: vnode => (this.inputDom = vnode.dom),
          oninput: onchange && (e => onchange(e.target.value)),
          onchange: onchange && (e => onchange(e.target.value))
        }),
        label && m(`label.${this.className}-label`, label)
      ]
    )
  }
}
