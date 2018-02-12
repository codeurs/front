import {styler, spring, listen, pointer, value, tween, calc} from 'popmotion'
import m from 'mithril'
import {Component} from './component'

import './slider.less'
export class Slider extends Component {
	size = 0
	total = 0
	pos = null
	// scroll = scroll()
	// Todo: add proper scroll decay after
	// https://github.com/Popmotion/stylefire/pull/8 is merged
	slides = []
	tween = null

	oncreate() {
		const contentStyler = styler(this.dom.firstChild)
		this.pos = value(0, contentStyler.set('x'))
		const listener = this.listen()
		const size = e => this.setSize(true)
		window.addEventListener('resize', size)
		size()
		// We redraw in the next frame here, because
		// active state is only now available
		setTimeout(m.redraw)
		this.onremove = () => {
			listener.stop()
			window.removeEventListener('resize', size)
		}
	}

	// Todo: rewrite this to properly to use popmotion's actions and reactions
	listen() {
		return listen(this.dom, 'mousedown touchstart').start(e => {
			if (this.tween) this.tween.stop()
			const scrollTop =
				document.body.scrollTop || document.documentElement.scrollTop
			let start, isHorizontal
			const track = pointer({x: this.pos.get()}).start(p => {
				if (!start) return start = {x: p.x, y: p.y}
				if (!isHorizontal) {
					isHorizontal = Math.abs(start.x - p.x) > Math.abs(start.y - p.y)
					this.dom.style.pointerEvents = 'none'
				}
				if (isHorizontal) this.pos.update(p.x)
				else window.scrollTo(0, scrollTop + -p.y)
			})
			listen(document, 'mouseup touchend', {once: true}).start(e => {
				const {total, index} = this.attrs
				const velocity = this.pos.getVelocity()
				track.stop()
				this.dom.style.pointerEvents = ''
				if (Math.abs(velocity) > .2 * this.size) {
					const next = velocity > 0 ? index() - 1 : index() + 1
					if (next > 0 && next < total()) {
						index(next)
						return m.redraw()
					}
				}
				this.bounce()
			})
		})
	}

	// Bounce back to current slide
	bounce() {
		const {index} = this.attrs
		this.tween = spring({
			from: this.pos.get(),
			velocity: this.pos.getVelocity(),
			to: this.slides[index()],
			stiffness: 100,
			damping: 20
		}).start(this.pos)
	}

	setSize(resized = false) {
		const {index} = this.attrs
		const size = this.dom.getBoundingClientRect().width
		this.size = size
		this.calcSlides()
		if (resized) this.pos.update(this.slides[index()])
	}

	calcSlides() {
		const {index, total, actives} = this.attrs
		const content = this.dom.firstChild
		const children = content.children
		const activeChecks = []
		this.slides = [0]
		let curr = 0,
			prev = 0,
			last = 0
		for (let i = 0; i < children.length; i++) {
			const slide = children[i]
			const width = slide.getBoundingClientRect().width
			curr += width
			// We add a pixel to the width here to prevent rounding errors
			if (curr - last >= this.size + 1) {
				if (prev !== 0) this.slides.push(-prev)
				last = prev
			}
			const start = prev,
				end = curr
				activeChecks.push(() => {
				const now = this.slides[index]
				return start >= -now - 1 && end <= -now + this.size + 1
			})
			prev = curr
		}
		if (curr > last && last !== 0) {
			const toLast = curr - this.size
			this.slides.pop()
			this.slides.push(-(curr - this.size))
		}
		total(this.slides.length)
		if (index() > total())
			index(total() - 1)
		if (actives) actives(activeChecks)
	}

	onupdate() {
		const {index} = this.attrs
		const x = this.pos.get()
		this.setSize()
		if (x != this.slides[index()])
			this.tween = tween({
				from: this.pos.get(),
				velocity: this.pos.getVelocity(),
				to: this.slides[index()],
				stiffness: 200
			}).start(this.pos)
	}

	view() {
		const {unstyled = false} = this.attrs
		const style = styles => ({style: unstyled || styles})
		return m('.slider',
			style({overflow: 'hidden'}),
			m('.slider-content', this.children)
		)
	}
}
