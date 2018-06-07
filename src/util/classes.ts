import classNames from 'classnames'

function prefixClassNames(prefix, input) {
	return classNames(input)
		.split(' ')
		.filter(v => v)
		.map(name => (prefix ? `${prefix}-${name}` : name))
}

function prefix(key) {
	switch (key) {
		case 'class':
		case 'className':
			return null
		default:
			return key
	}
}

function parseClasses(classes) {
	if (typeof classes == 'string' || Array.isArray(classes) || !classes)
		return classes
	return Object.keys(classes).map(key => {
		return prefixClassNames(prefix(key), classes[key])
	})
}

export function classes(...classes) {
	const names = classNames(classes.map(parseClasses))
	return names ? {className: names} : {}
}
