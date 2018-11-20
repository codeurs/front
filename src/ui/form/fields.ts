import m from 'mithril'
import {FormStatus, FormStore} from '../../store/formstore'
import {randomKey} from '../../util/formutils'
import {Field} from './field'
import jump from 'jump.js/src/jump.js'

export {Input} from './input'
export {Select} from './select'
export {Textarea} from './textarea'
export {Radio} from './radio'
export {Radios} from './radios'
export {Checkbox} from './checkbox'
export {Boxes} from './boxes'

export class Fields {
	store: FormStore
  key = randomKey()
  config = {
    fieldClass: Field,
    defaultUnstyled: false,
    defaultRequired: true,
    labelInFields: false
  }

  constructor(store, config) {
    this.store = store
    this.config = {...this.config, ...config}
  }

  status() {
    return this.store.status
  }

  asField(viewClass, config, children?) {
    return m(
      this.config.fieldClass,
      this.fieldAttrs(config),
      m(viewClass, this.viewAttrs(config), children)
    )
  }

  defaultFieldAttrs(key, rest) {
    return {
      required: this.config.defaultRequired,
      unstyled: this.config.defaultUnstyled,
      name: key,
      ...rest,
      id: 'field_' + key + '_' + this.key,
      value: this.store.data[key],
      onchange: value => this.store.setData(key, value),
      label: this.config.labelInFields ? undefined : rest.label
    }
  }

  /**
   * Can be used to initialize custom formfields - also used internally
   */
  fieldAttrs({key, ...rest}) {
		const attrs = this.defaultFieldAttrs(rest.name || key, rest)
		const status = this.status()
    switch (status.type) {
      case 'error':
        return {
          ...attrs,
          errors: status.errors[key], 
          onfocus: () => {
						if (status.type == 'error')
							delete status.errors[key]
					}
        }
      default: 
        return attrs
    }
  }

  /**
   * This method can be overridden and used to filter certain attributes from passing on to the child element inside.
   * Example: Use this to filter out the label attribute. It can now be drawn in the field view itself.
   */
  viewAttrs(attrs) {
    return {
      ...this.fieldAttrs(attrs),
      id: undefined,
      label: this.config.labelInFields ? attrs.label : undefined
    }
  }

  focusField(field) {
    jump(`#field_${field}_${this.key}`)
  }
}