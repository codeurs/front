import m from 'mithril'
import {Component} from '../component'
import hexRgb from 'hex-to-rgb'

export class DuoTone extends Component<{
	id?: string
	from: string
	to: string
}> {
	view() {
		const {id, from, to} = this.attrs
		const a = hexRgb(from)
		const b = hexRgb(to)
		return m('filter', {id}, [
			m('feComponentTransfer',
				{
					'color-interpolation-filters': 'sRGB'
				},
				[
					m('feFuncR[type=table]', {
						tableValues: a[0] / 255 + ' ' + b[0] / 255
					}),
					m('feFuncG[type=table]', {
						tableValues: a[1] / 255 + ' ' + b[1] / 255
					}),
					m('feFuncB[type=table]', {
						tableValues: a[2] / 255 + ' ' + b[2] / 255
					}),
					m('feFuncA[type=table]', {
						tableValues: '0 1'
					})
				]
			)
		])
	}
}