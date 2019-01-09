import {View} from '../ui/view'
import {Location} from './router'
import {m} from '../hyperscript'

export class Redirect extends View<{
	to: string
}> {
	view() {
		const {to} = this.attrs
		return m(Location, location => location.replace(location.formatPath(to)))
	}
}
