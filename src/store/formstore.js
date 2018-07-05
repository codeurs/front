export const FormStatus = {
    Reset: 'normal',
    Sending: 'sending', // {xhr}
    Failure: 'error', // {errors}
    Success: 'submitted' // {response}
}

export class FormStore {
    onchange = () => {}

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
        const res = this.setDataRec(this.data, key.split('.'), value)
        this.onchange(this.data)
        return res
    }

    setDataRec(data, keyParts, value) {
        const key = keyParts.shift()

        if(keyParts.length){
            const newData = data[key]
            return this.setDataRec(newData, keyParts, value)
        }

        return data[key] = value
    }

    getData(key) {
        return key.split('.').reduce(
            (acc, curr) => acc[curr],
            this.data
        )
    }

    toString() {
        return this.status.type
    }
}