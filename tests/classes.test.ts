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
