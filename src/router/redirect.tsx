import {m} from '../hyperscript'
import {View} from '../ui/view'
import {Location, RouterContext} from './router'

export class Redirect extends View<{
	to: string
}> {
	render() {
		const {to} = this.attrs
		return (
			<Location>
				{(location: RouterContext) => {
					location.replace(location.formatPath(to))
					return null
				}}
			</Location>
		)
	}
}
