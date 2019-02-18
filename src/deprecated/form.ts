import m, {RequestOptions} from 'mithril'
import objectToFormData from 'object-to-formdata'
import {FormStatus, FormStore} from '../store/formstore'
import {
	Boxes,
	Checkbox,
	Fields,
	Input,
	Radios,
	Select,
	Textarea
} from '../ui/form/fields'

export class FormBase {
	constructor(protected store: FormStore, protected fields: Fields) {}

	status() {
		return this.store.status.type
	}

	isCompleted() {
		return this.status() == FormStatus.Success
	}

	formSubmit(e: Event, options = {}) {
		e.preventDefault()
		const form = e.target as HTMLFormElement
		const {action: url, method} = form
		const type = form.getAttribute('enctype') || 'application/json'
		return this.submit(type, {url, method, ...options})
	}

	submit(type: string, options: {url: string} & RequestOptions<any>) {
		const {url, method, headers = {}, ...rest} = options
		switch (this.store.status.type) {
			case 'sending':
			case 'success':
				return Promise.resolve()
			default:
				return this.transfer({
					url,
					method,
					data: this.formatData(type),
					headers:
						type.indexOf('multipart') === 0
							? headers
							: {'Content-Type': type, ...headers},
					serialize: v => v,
					...rest
				}).then(
					response => Promise.resolve(this.store.success(response)),
					errors => Promise.reject(this.store.fail(errors))
				)
		}
	}

	formatData(type: string) {
		switch (type) {
			case 'application/x-www-form-urlencoded':
				return m.buildQueryString(this.store.data)
			case 'multipart/form-data':
				return objectToFormData(this.store.data)
			case 'application/json':
				return JSON.stringify(this.store.data)
		}
	}

	transfer(request: RequestOptions<any> & {url: string}) {
		return m.request({
			...request,
			config: (xhr: XMLHttpRequest) => {
				this.store.send(xhr)
			}
		})
	}

	text = (config: any) => this.fields.asField(Input, {...config})
	email = (config: any) => this.text({...config, type: 'email'})
	password = (config: any) => this.text({...config, type: 'password'})
	textarea = (config: any) => this.fields.asField(Textarea, {...config})
	select = (config: any) => this.fields.asField(Select, config)
	radio = (config: any) => this.fields.asField(Radios, config)
	checkbox = (config: any) => this.fields.asField(Checkbox, config)
	boxes = (config: any) => this.fields.asField(Boxes, config)
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
	constructor({data = {}, ...config} = {}) {
		const store = new FormStore(data)
		const fields = new Fields(store, {
			defaultUnstyled: true,
			labelInFields: false,
			defaultRequired: false,
			...config
		})
		super(store, fields)
	}

	formSubmit(e: Event, options: {url: string} & RequestOptions<any>) {
		return super.formSubmit(e, options).catch(errors => {
			const [firstKey] = Object.keys(errors)
			if (firstKey) this.fields.focusField(firstKey)
		})
	}
}
