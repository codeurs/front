import {classes} from '../src/util/classes'

test('object state', () => {
	const active = true
	expect(classes('hamburger hamburger--spin', {is: {active}}).className).toBe(
		'hamburger hamburger--spin is-active'
	)
})

test('string modifier', () => {
	const channel = 'abc'
	expect(classes({mod: {channel}}).className).toBe(
		'mod-channel-abc'
	)
})

test('array modifier', () => {
	expect(classes({mod: {
		channel: ['a', 'b', 'c']
	}}).className).toBe(
		'mod-channel-a mod-channel-b mod-channel-c'
	)
})

const root = (selector: string) =>
	Object.assign((sub: string) => root(`${selector}-${sub}`), {
		with(extra: string) {
			return `${selector} ${extra}`
		},
		sub(sub: string) {
			return root(`${selector}_${sub}`)
		},
		is(state: Record<string, boolean>) {
			return root(selector).with(
				Object.entries(state)
					.map(([cl, active]) => active && cl)
					.filter(v => v)
					.map(cl => `is-${cl}`)
					.join(' ')
			)
		},
		toString() {
			return selector
		}
	})

const style = root('test')
test('style', () => {
	expect(classes({mod: style}).className).toBe(
		'mod-test'
	)
})