import m from 'mithril'
import {FormStatus, FormStore} from './store/formstore'
import objectToFormData from 'object-to-formdata'
import {
  Fields,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Boxes
} from './ui/form/fields'

export function createForm({data = {}, ...config} = {}) {
  const store = new FormStore(data)
  const fields = new Fields(store, config)
  return new FormBase(store, fields)
}

export class FormBase {
  constructor(store, fields) {
    this.store = store
    this.fields = fields
  }

  formSubmit = e => {
    e.preventDefault()
    const form = e.target
    const {action: url, method} = form
    const type = form.getAttribute('enctype') || 'application/json'
    return this.submit(type, {url, method})
  }

  submit(type, {url, method, headers = {}, ...options}) {
    switch (this.store) {
      case FormStatus.Sending:
      case FormStatus.Success:
        return
      default:
        return this.transfer({
          url,
          method,
          data: this.formatData(type),
          headers: {'Content-Type': type, ...headers},
          serialize: v => v,
          ...options
        }).then(
          response => Promise.resolve(this.store.success(response)),
          errors => Promise.reject(this.store.fail(errors))
        )
    }
  }

  formatData(type) {
    switch (type) {
      case 'application/x-www-form-urlencoded':
        return m.buildQueryString(this.store.data)
      case 'multipart/form-data':
        return objectToFormData(this.store.data)
      case 'application/json':
        return JSON.stringify(this.store.data)
    }
  }

  transfer(request) {
    return m.request({
      ...request,
      config: xhr => this.store.send(xhr)
    })
  }

  text = config => this.fields.asField(Input, {...config})
  email = config => this.text({...config, type: 'email'})
  password = config => this.text({...config, type: 'password'})
  textarea = config => this.fields.asField(Textarea, {...config})
  select = config => this.fields.asField(Select, config)
  radio = config => this.fields.asField(Radios, config)
  checkbox = config => this.fields.asField(Checkbox, config)
  boxes = config => this.fields.asField(Boxes, config)
}

/**
 * Als instance klasse van de view waar je de form wilt gebruiken maak je een nieuw Form aan.
 * Het onsubmit event van je html formulier koppel je door aan de submit methode van dit form object.
 * Velden toevoegen aan je html formulier is gemakkelijk via de shortcurts die je vind op dit form object.
 * Wanneer het onsucces event wordt aangeroepen weet je dat het formulier succesvol verwerkt is door de server.
 *
 * Eigen custom velden maken en toevoegen kan door de attrs methode te gebruiken (zie implementatie shortcuts).
 * Een eigen veld moet ten minste de attributes 'value' en 'onchange' ondersteunen om te functioneren.
 *
 * Langs de serverkant moet je een route voorzien die de data verwerkt.
 * Deze stuurt een json bericht terug van volgende type:
 * {
 *      "succes": true | false
 *      "errors": { ... }           // Alleen als succes false is
 *      "data": { ... }             // Alleen als succes true is (wordt meegegeven als argument aan de onsucces)
 * }
 *
 * TODO:
 * - Gebruik de setCustomValidity methode om de in-browser validatie toe te passen op elementen met een error
 * - Select vervangen door geheel eigen implementatie (die makkelijker te stylen is als de standaard html select)
 * - Een flexibel en veilig wysiwyg-editor veld toevoegen (bv. tinymce)
 * - Basis styling van bestaande elementen robuuster en flexibeler maken
 */

export class Form extends FormBase {
  constructor({url, data = {}, headers = {}, onsuccess, ...config}) {
    const store = new FormStore(data)
    const fields = new Fields(store, config)
    super(store, fields)
    // Let's try and fix this typo right from the start without breaking our dependants
    if ('onsucces' in config) onsuccess = config.onsucces
    this.url = url
    this.headers = headers
    this.onsuccess = onsuccess
  }

  submit(e) {
    if (e) e.preventDefault()
    const form = e.target
    return super
      .submit('multipart/form-data', {
        url: this.url,
        method: 'POST',
        headers: this.headers
      })
      .then(response => {
        this.msg = response.msg
        if (response.success) this.done(response)
        else this.failure(form, response.errors || {})
      })
  }

  done(response) {
    if (this.onsuccess) this.onsuccess(response.data)
  }

  failure(form, errors) {
    const [firstKey] = Object.keys(errors)
    if (firstKey) this.fields.focusField(firstKey)
    // TODO:
    // Voor browers die het ondersteunen enkel reportValidity gebruiken en geen jump.
    // Alvorens dat kan moet eerst setCustomValidity juist geimplementeerd worden voor alle elementen
    if ('reportValidity' in form)
      setTimeout(() => {
        if (form.reportValidity) form.reportValidity()
      }, 20)
  }
}
