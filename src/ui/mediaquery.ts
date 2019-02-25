import m, {Children} from 'mithril'
import {Breakpoint} from './breakpoint'
import {View} from './view'

export class MediaQuery extends View<{
	minWidth?: number
	maxWidth?: number
	view: () => Children
}> {
	render() {
		const {view, minWidth, maxWidth} = this.attrs
		const rules = []
		if (minWidth) rules.push(`(min-width: ${minWidth}px)`)
		if (maxWidth) rules.push(`(max-width: ${maxWidth}px)`)
		const query = rules.join(' and ')
		return m(Breakpoint, {[query]: true}, (match: boolean) => match && view())
	}
}
