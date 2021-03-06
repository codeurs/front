import {Children} from 'mithril'
import {View} from '../ui/view'

export class Toggle extends View<{
	defaultValue?: boolean
	children: (options: {
		value: boolean
		toggle: () => boolean
		set: (value: boolean) => boolean
	}) => Children
}> {
	value = !!this.attrs.defaultValue
	render() {
		const {children} = this.attrs
		return children({
			value: this.value,
			toggle: () => (this.value = !this.value),
			set: v => (this.value = v)
		})
	}
}
