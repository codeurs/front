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
        return this.setDataRec(this.data, key.split('.'), value)
    }

    setDataRec(data, keyParts, value) {
        const key = keyParts.shift()
        const res = key.match(/(.*)\[(.*)]/)

        if(keyParts.length){
            const newData = res ? data[res[1]][res[2]] : data[key]
            return this.setDataRec(newData, keyParts, value)
        }

        return res ?
            data[res[1]][res[2]] = value :
            data[key] = value
    }

    getData(key) {
        //Key can be nested, eg. arguments[0].fieldname
        return key.split('.').reduce(
            (acc, curr) => {
                const res = curr.match(/(.*)\[(.*)]/)
                return res ? acc[res[1]][res[2]] : acc[curr]
            },
            this.data
        )
    }

    toString() {
        return this.status.type
    }
}