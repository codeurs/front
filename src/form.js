import jump from 'jump.js'
import m from 'mithril'
import Field from './ui/form/field'
import {Input} from './ui/form/input'
import {Select} from './ui/form/select'
import {Textarea} from './ui/form/textarea'
import {randomKey} from './util/formutils'
import {Radios} from './ui/form/radios'
import {Checkbox} from './ui/form/checkbox'
import {Boxes} from './ui/form/boxes'

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
 * - Select vervangen door geheel eigen implementatie (die makkelijker te stylen is als de standaard html select)
 * - Een flexibel en veilig wysiwyg-editor veld toevoegen (bv. tinymce)
 * - Basis styling van bestaande elementen robuuster en flexibeler maken
 */
export class Form {
    key = randomKey()
    config = {
        headers: {},
        fieldClass: Field,
        defaultUnstyled: false,
        defaultRequired: true,
        labelInFields: false
    }

    constructor({url, data = {}, onsucces, ...config}) {
        this.url = url
        this.data = data
        this.onsucces = onsucces
        this.config = {...this.config, ...config}

        this.errors = {}
        this.status = 'normal'
    }

    //Shortcuts for common fields
    text = config => this.asField(Input, {...config})
    email = config => this.text({...config, type: 'email'})
    password = config => this.text({...config, type: 'password'})
    textarea = config => this.asField(Textarea, {...config})
    select = config => this.asField(Select, config)
    radio = config => this.asField(Radios, config)
    checkbox = config => this.asField(Checkbox, config)
    boxes = config => this.asField(Boxes, config)

    asField(viewClass, config){
        return m(this.config.fieldClass, this.fieldAttrs(config),
            m(viewClass, this.viewAttrs(config))
        )
    }

    setData(key, value){
        this.data[key] = value
    }

    reset() {
        this.errors = {}
        this.status = 'normal'
    }

    /**
     * Can be used to initialize custom formfields - also used internally
     */
    fieldAttrs({key, ...rest}) {
        return {
            required: this.config.defaultRequired,
            unstyled: this.config.defaultUnstyled,
            name: key,
            ...rest,
            id: 'field_' + key + '_' + this.key,
            value: this.data[key],
            errors: this.errors[key],
            onfocus: () => {
                this.errors[key] = undefined
            },
            onchange: value => {
                this.errors[key] = undefined
                this.data[key] = value
            },
            label: this.config.labelInFields ? undefined : rest.label
        }
    }

    /**
     * This method can be overridden and used to filter certain attributes from passing on to the child element inside.
     * Example: Use this to filter out the label attribute. It can now be drawn in the field view itself.
     */
    viewAttrs(attrs){
        return {
            ...this.fieldAttrs(attrs),
            id: undefined,
            label: this.config.labelInFields ? attrs.label : undefined
        }
    }

    submit(e) {
        if (e) e.preventDefault()
        if (this.status == 'submitted') return
        if (this.status == 'sending') return
        this.status = 'sending'

        const formData = new FormData()
        for (const key of Object.keys(this.data)) {
            const val = this.data[key]
            if (val instanceof File) formData.append(key, val)
            else if (
                typeof val == 'string' ||
                typeof val == 'number' ||
                typeof val == 'boolean'
            )
                formData.append(key, val)
            else formData.append(key, JSON.stringify(val))
        }
        //formData.append('_token', Page.data.csrf_token)

        m
            .request({
                method: 'POST',
                url: this.url,
                headers: this.config.headers,
                data: formData
            })
            .then(response => {
                if (response.success) {
                    this.status = 'submitted'
                    this.msg = response.msg
                    this.errors = {}
                    if (this.onsucces) this.onsucces(response.data)
                } else {
                    this.status = 'error'
                    this.msg = response.msg
                    this.errors = response.errors || {}

                    const [firstKey] = Object.keys(this.errors)
                    if (firstKey) {
                        jump('#field_' + firstKey + '_' + this.key)
                    }
                }
            })
    }
}
