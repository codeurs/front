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
	| {type: 'error'; errors: {[key: string]: any}}
	| {type: 'success'; response: {[key: string]: any}}

export class FormStore {
	data: {[key: string]: any}
	status: FormState

	constructor(data = {}) {
		this.data = data
		this.status = {type: 'reset'}
	}

	send(xhr: XMLHttpRequest) {
		this.status = {type: 'sending', xhr}
	}

	success(response: any) {
		this.status = {type: 'success', response}
		return response
	}

	fail(errors: any) {
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

	setData(key: string, value: any) {
		this.data[key] = value
	}

	toString() {
		return this.status.type
	}
}
