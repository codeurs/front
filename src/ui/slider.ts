import './slider.less'

import m from 'mithril'
import {Stream} from 'mithril/stream'
import {
	ColdSubscription,
	listen,
	pointer,
	spring,
	styler,
	tween,
	value,
	ValueReaction
} from 'popmotion'
import {View} from './view'

export class Slider extends View<
	{
		index: Stream<number>
		total: Stream<number>
		actives: Stream<Array<() => void>>
		animating: Stream<boolean>
		unstyled?: boolean
	},
	HTMLDivElement
> {
	size = 0
	total = 0
	pos!: ValueReaction
	// scroll = scroll()
	// Todo: add proper scroll decay after
	// https://github.com/Popmotion/stylefire/pull/8 is merged
	slides: Array<number> = []
	tween?: ColdSubscription

	onCreate(dom: HTMLDivElement) {
		const contentStyler = (styler as any)(dom.firstChild)
		this.pos = value(0, contentStyler.set('x'))
		const listener = this.listen(dom)
		const size = () => this.setSize(true)
		window.addEventListener('resize', size)
		size()
		// We redraw in the next frame here, because
		// active state is only now available
		setTimeout(m.redraw)
		this['onremove'] = () => {
			listener.stop && listener.stop()
			window.removeEventListener('resize', size)
		}
	}

	// Todo: rewrite this to properly to use popmotion's actions and reactions
	private listen(dom: HTMLDivElement): ColdSubscription {
		return listen(dom, 'mousedown touchstart').start(() => {
			const {animating} = this.attrs
			if (this.tween) this.tween.stop && this.tween.stop()
			animating(true)
			let start: {x: number; y: number},
				isHorizontal: null | boolean = null
			const track = pointer({
				x: this.pos.get() as number,
				preventDefault: false
			}).start((p: {x: number; y: number}) => {
				if (!start) return (start = {x: p.x, y: p.y})
				if (isHorizontal === null) {
					isHorizontal = Math.abs(start.x - p.x) > Math.abs(start.y - p.y)
					this.dom && (this.dom.style.pointerEvents = 'none')
				}
				if (isHorizontal) this.pos.update(p.x)
			})
			listen(document, 'mouseup touchend', {once: true}).start(() => {
				const {total, index} = this.attrs
				const velocity = this.pos.getVelocity()
				track.stop && track.stop()
				this.dom && (this.dom.style.pointerEvents = '')
				if (!isHorizontal) return
				if (Math.abs(velocity) > 0.2 * this.size) {
					const next = velocity > 0 ? index() - 1 : index() + 1
					if (next >= 0 && next < total()) {
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
		const {index, animating} = this.attrs
		if (this.tween) this.tween.stop && this.tween.stop()
		animating(true)
		this.tween = spring({
			from: this.pos.get(),
			velocity: this.pos.getVelocity(),
			to: this.slides[index()],
			stiffness: 100,
			damping: 20
		}).start({
			update: (v: number) => this.pos.update(v),
			complete: () => animating(false)
		})
	}

	setSize(resized = false) {
		const {index} = this.attrs
		if (!this.dom) return
		this.size = this.dom.getBoundingClientRect().width
		this.calcSlides()
		if (resized) this.pos.update(this.slides[index()])
	}

	calcSlides() {
		if (!this.dom) return
		const {index, total, actives} = this.attrs
		const content = this.dom.firstChild as HTMLElement
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
				const now = this.slides[index()]
				return start >= -now - 1 && end <= -now + this.size + 1
			})
			prev = curr
		}
		if (curr > last && last !== 0) {
			const toLast = curr - this.size
			this.slides.pop()
			this.slides.push(-(curr - this.size))
		}
		if (total() != this.slides.length) {
			total(this.slides.length)
			if (index() > total()) index(total() - 1)
			setTimeout(m.redraw)
		}
		if (actives) actives(activeChecks)
	}

	onupdate() {
		const {index, animating} = this.attrs
		const x = this.pos.get()
		this.setSize()
		if (x != this.slides[index()])
			this.tween = tween({
				from: this.pos.get(),
				//velocity: this.pos.getVelocity(),
				to: this.slides[index()]
				//stiffness: 200
			}).start({
				update: (v: number) => this.pos.update(v),
				complete: () => animating(false)
			})
	}

	view() {
		const {unstyled = false} = this.attrs
		return m('.slider',
			{style: unstyled || {overflow: 'hidden'}},
			m('.slider-content', this.children)
		)
	}
}
