import m from 'mithril'

export const FormStatus = {
	Reset: 'reset',
	Sending: 'sending', // {xhr}
	Failure: 'error', // {errors}
	Success: 'success' // {response}
}

export type FormState =
	| {type: 'reset'}
	| {type: 'sending'; xhr: XMLHttpRequest}
	| {type: 'error'; errors: {}}
	| {type: 'success'; response: {}}

export class FormStore {
	data: {}
	status: FormState

	constructor(data = {}) {
		this.data = data
		this.status = {type: 'reset'}
	}

	send(xhr) {
		this.status = {type: 'sending', xhr}
	}

	success(response) {
		this.status = {type: 'success', response}
		return response
	}

	fail(errors) {
		this.status = {type: 'error', errors}
		return errors
	}

	reset() {
		switch (this.status.type) {
			case 'sending':
				this.status.xhr.abort()
			default:
				this.status = {type: 'reset'}
		}
	}

	setData(key, value) {
		this.data[key] = value
	}

	toString() {
		return this.status.type
	}
}
