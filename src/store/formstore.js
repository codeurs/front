import m from 'mithril'

export const FormStatus = {
  Reset: 'normal',
  Sending: 'sending', // {xhr}
  Failure: 'error', // {errors}
  Success: 'submitted' // {response}
}

export class FormStore {
  constructor(data = {}) {
    this.data = data
    this.status = {type: FormStatus.Reset}
  }

  send(xhr) {
    this.status = {type: FormStatus.Sending, xhr}
  }

  success(response) {
    this.status = {type: FormStatus.Success, response}
    return response
  }

  fail(errors) {
    this.status = {type: FormStatus.Failure, errors}
    return errors
  }

  reset() {
    switch (this.status.type) {
      case FormData.Sending:
        this.status.xhr.abort()
      default:
        this.status = {type: FormStatus.Reset}
    }
  }

  setData(key, value) {
    this.data[key] = value
  }

  toString() {
    return this.status.type
  }
}