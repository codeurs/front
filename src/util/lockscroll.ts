import {scrollbarWidth} from './scrollbarwidth'

const style = document.body.style

export default (lock: boolean) => {
	if (lock) {
		style.paddingRight = scrollbarWidth + 'px'
		style.overflow = 'hidden'
	} else {
		style.paddingRight = ''
		style.overflow = ''
	}
}
