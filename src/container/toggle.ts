import {Children} from '../hyperscript'
import {View} from '../ui/view'

export class Toggle extends View<
	{
		defaultValue?: boolean
		children: (options: {
			value: boolean
			toggle: () => void
			set: (value: boolean) => void
		}) => Children
	},
	{open: boolean}
> {
	state = {open: !!this.attrs.defaultValue}
	render() {
		const {children} = this.attrs
		return children({
			value: this.state.open,
			toggle: () => {
				this.setState(({open}) => ({open: !open}))
			},
			set: open => this.setState({open})
		})
	}
}
