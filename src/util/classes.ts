import classNames from 'classnames'
import {DOMAttrs} from '../hyperscript'

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

export function parseClasses(
	classes: ClassValue
): ClassValue | Array<ClassValue> {
	if (!classes || Array.isArray(classes) || typeof classes !== 'object')
		return classes
	return Object.keys(classes).map(key =>
		typeof classes[key] === 'object' || typeof classes[key] === 'string'
			? prefixClassNames(
					key,
					([] as Array<ClassValue>).concat(parseClasses(classes[key]))
			  )
			: classNames({[key]: classes[key]})
	)
}

export function classes(...classes: Array<ClassValue>) {
	const names = classNames(classes.map(parseClasses))
	return names ? {className: names} : {}
}

export const addClasses = (
	attrs: DOMAttrs,
	...rest: Array<ClassValue>
): DOMAttrs => {
	const {class: c1, className: c2, ...props} = attrs
	return {...classes(c1, c2, ...rest), ...props}
}
