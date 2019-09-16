export type Mod<T extends string> = T | {[K in T]?: boolean} | Array<T>

const cache = new Map()

export type Styler = {
	(sub?: string | ClassName): ClassName
} & ClassName

export type ClassName = {
	className: string
} & ClassApi

// Fool typescript into marking these properties as non enumerable so
// we can jsx spread the result
class ClassApi {
	with(...extra: Array<string | Styler>): Styler {
		throw 'assert'
	}
	mergeProps(attrs: {[key: string]: any}): Styler {
		throw 'assert'
	}
	sub(sub: string): Styler {
		throw 'assert'
	}
	is(state: Record<string, boolean>): Styler {
		throw 'assert'
	}
	mod(modifier: Mod<any>): Styler {
		throw 'assert'
	}
	toSelector(): string {
		throw 'assert'
	}
	toString(): string {
		throw 'assert'
	}
}

const states = (
	selector: string | Styler,
	name: string,
	state: Record<string, boolean>
) =>
	className(String(selector)).with(
		...Object.entries(state)
			.map(([cl, active]) => active && cl)
			.filter(v => v)
			.map(cl => `${name}-${cl}`)
	)

const createStyler = (input: any, value: string) => {
	input['className'] = String(value)
	Object.defineProperties(input, {
		with: {
			enumerable: false,
			value(...extra: Array<string | ClassName>) {
				return className(
					([] as Array<string | ClassName>)
						.concat(extra)
						.concat(value)
						.filter(v => v)
						.join(' ')
				)
			}
		},
		mergeProps: {
			enumerable: false,
			value(props: {[key: string]: any}) {
				return className(value).with(props.class, props.className)
			}
		},
		sub: {
			enumerable: false,
			value(sub: string) {
				return classNameBuilder(`${value}_${sub}`)
			}
		},
		is: {
			enumerable: false,
			value(state: Record<string, boolean>) {
				return states(value, 'is', state)
			}
		},
		mod: {
			enumerable: false,
			value(modifier: Mod<any>) {
				if (!modifier) return this
				if (Array.isArray(modifier))
					return className(
						`${modifier.map(c => `mod-${c}`).join(' ')} ${value}`
					)
				if (typeof modifier === 'object') return states(value, 'mod', modifier)
				return className(`mod-${modifier} ${value}`)
			}
		},
		toSelector: {
			enumerable: false,
			value() {
				const joined = String(value)
					.split(' ')
					.join('.')
				if (joined.length > 0) return `.${joined}`
				return ''
			}
		},
		toString: {
			value() {
				return String(value)
			}
		}
	})
}

const className = (selector: string): Styler => {
	if (cache.has(selector)) return cache.get(selector)
	const inst: any = {}
	createStyler(inst, selector)
	cache.set(selector, inst)
	return inst
}

type RootStyler = {
	(selector: string): Styler
	<T extends string>(selector: string, subs: Array<T>): {[K in T]: Styler} &
		Styler
}

export const classNameBuilder: RootStyler = <T extends string>(
	selector: string,
	subs: Array<T> = []
) => {
	const key = `${selector}//(${subs})`
	if (cache.has(key)) return cache.get(key)
	const inst: any = (sub?: string | ClassName) =>
		!sub ? className(selector) : className(`${selector}-${sub}`)
	createStyler(inst, selector)
	subs.forEach(sub =>
		Object.defineProperty(inst, sub, {
			enumerable: false,
			value: classNameBuilder(`${selector}_${sub}`)
		})
	)
	cache.set(key, inst)
	return inst
}
