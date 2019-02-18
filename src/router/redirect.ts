import {m} from '../hyperscript'
import {View} from '../ui/view'
import {Location, RouterContext} from './router'

export class Redirect extends View<{
	to: string
}> {
	view() {
		const {to} = this.attrs
		return m(Location, (location: RouterContext) =>
			location.replace(location.formatPath(to))
		)
	}
}
