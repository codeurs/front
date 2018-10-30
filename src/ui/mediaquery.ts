import m from 'mithril'
import {Vnode} from 'mithril'
import {Component} from './component'
import matchMedia from 'matchmediaquery'

export class MediaQuery extends Component<{
	minWidth?: number
	maxWidth?: number
	view: () => Vnode
}> {
	matcher = this.createMatcher()

	createMatcher() {
		const {minWidth, maxWidth} = this.attrs
		const rules = []
		if (minWidth) rules.push(`(min-width: ${minWidth}px)`)
		if (maxWidth) rules.push(`(max-width: ${maxWidth}px)`)
		const query = rules.join(' and ')
		const matcher = matchMedia(query)
		matcher.addListener(m.redraw)
		return matcher
	}

	onremove() {
		this.matcher.removeListener(m.redraw)
	}

	view() {
		const {view} = this.attrs
		return this.matcher.matches && view()
	}
}
