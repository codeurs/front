export type Option = {key: string; label: string}

export type OptionsArray = Array<string | Option>

export type Options = OptionsArray | {[key: string]: string}

export function cleanupOptions(options: Options): Array<Option> {
	if (!options) return []
	if (Array.isArray(options))
		return options.map(o => (typeof o === 'string' ? {key: o, label: o} : o))
	return Object.keys(options).map(key => ({
		key: key,
		label: options[key]
	}))
}

export function randomKey(prefix = '') {
	return (
		prefix +
		Math.random()
			.toString(36)
			.substr(2, 10)
	)
}

export function getErrorMessage(errors: any) {
	if (errors === undefined) return ''
	const errorsList = typeof errors == 'string' ? [errors] : errors

	if (errorsList.length) return errorsList[0]
	return 'This value is not valid'
}
