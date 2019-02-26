import classNames from 'classnames'

interface ClassDictionary {
	[id: string]: any
}

interface ClassArray extends Array<ClassValue> {}

type ClassValue =
	| string
	| ClassDictionary
	| ClassArray
	| undefined
	| null
	| boolean

function prefixClassNames(prefix: string | null, input: Array<ClassValue>) {
	return classNames(input)
		.split(' ')
		.filter(v => v)
		.map(name => (prefix ? `${prefix}-${name}` : name))
}

function prefix(key: string) {
	switch (key) {
		case 'class':
		case 'className':
			return null
		default:
			return key
	}
}

function parseClasses(classes: ClassValue): ClassValue | Array<ClassValue> {
	if (typeof classes == 'string' || Array.isArray(classes) || !classes)
		return classes
	return (
		typeof classes == 'object' &&
		Object.keys(classes).map(key =>
			prefixClassNames(
				prefix(key),
				([] as Array<ClassValue>).concat(parseClasses(classes[key]))
			)
		)
	)
}

export function classes(...classes: Array<ClassValue>) {
	const names = classNames(classes.map(parseClasses))
	return names ? {className: names} : {}
}

export const addClasses = (
	attrs: {
		class?: string
		className?: string
	},
	...rest: Array<ClassValue>
) => {
	const {class: c1, className: c2} = attrs
	return classes(c1, c2, ...rest)
}
