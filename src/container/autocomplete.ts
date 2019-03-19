import {Children, VnodeDOM} from 'mithril'
import scrollIntoView from 'scroll-into-view-if-needed'
import {DOMAttrs, m} from '../hyperscript'
import {
	AutocompleteAction, AutocompleteChange, AutocompleteState, AutocompleteStore
} from '../store/autocompletestore'
import {View} from '../ui/view'

export type AutocompleteApi<Item> = AutocompleteState<Item> & {
	inputAttrs: (attrs?: DOMAttrs) => DOMAttrs
	menuAttrs: (attrs?: DOMAttrs) => DOMAttrs
	buttonAttrs: (attrs?: DOMAttrs) => DOMAttrs
	labelAttrs: (attrs?: DOMAttrs) => DOMAttrs
	itemAttrs: (attrs: ItemAttrs<Item>) => DOMAttrs
}

export type AutocompleteRenderApi<Item> = (
	api: AutocompleteApi<Item>
) => Children

type ItemAttrs<Item> = {
	item: Item
} & DOMAttrs

const callFunctions = (...fns: Array<Function>) => (...args: Array<any>) =>
	fns.forEach(fn => fn && fn(...args))

const callHandlers = (...fns: Array<Function>) => (
	event: Event & {redraw: boolean}
) => {
	event.redraw = false
	return callFunctions(...fns)(event)
}

const normalizeArrowKey = (event: KeyboardEvent) => {
	const {key, keyCode} = event
	if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0)
		return `Arrow${key}`
	return key
}

const isOrContainsNode = (parent: HTMLElement, child: HTMLElement) =>
	parent === child || (parent.contains && parent.contains(child))

export class Autocomplete<Item> extends View<
	{
		store?: AutocompleteStore<Item>
		onselect?: (item: null | Item) => void
		itemToString?: (item: Item) => string
		children: AutocompleteRenderApi<Item>
	},
	HTMLElement
> {
	static instanceCount = 0

	state: AutocompleteStore<Item> = new AutocompleteStore()

	private items: Array<Item> = []
	private id = `autocomplete-${Autocomplete.instanceCount++}`
	private menuId = `${this.id}-menu`
	private labelId = `${this.id}-label`
	private inputId = `${this.id}-input`
	private buttonId = `${this.id}-button`
	private getItemId = (index: number) => `${this.id}-item-${index}`
	private clearCallbacks: Array<Function> = []
	private avoidScrolling = false
	private interacting = false

	get store() {
		return this.attrs.store || this.state
	}

	onCreate(dom: HTMLElement) {
		const onMouseDown = () => (this.interacting = true)
		const onMouseUp = (event: Event) => {
			const target = event.target as HTMLElement
			const {isOpen} = this.store
			this.interacting = false
			if (isOpen && !isOrContainsNode(dom, target))
				this.dispatch({type: AutocompleteChange.MouseUp})
		}
		dom.addEventListener('mousedown', onMouseDown)
		window.addEventListener('mouseup', onMouseUp)
		dom.addEventListener('touchstart', onMouseDown, {passive: true})
		window.addEventListener('touchend', onMouseUp)
		this.onRemove = () => {
			dom.removeEventListener('mousedown', onMouseDown)
			window.removeEventListener('mouseup', onMouseUp)
			dom.removeEventListener('touchstart', onMouseDown)
			window.removeEventListener('touchend', onMouseUp)
			this.clearCallbacks.forEach(fn => fn())
		}
	}

	inputAttrs = (attrs: DOMAttrs = {}) => {
		const {onkeydown, onblur, oninput, ...rest} = attrs
		const {inputValue, isOpen, highlightedIndex} = this.store
		const events = {
			oninput: callHandlers(oninput, this.inputChange),
			onblur: callHandlers(oninput, this.inputBlur),
			onkeydown: callHandlers(oninput, this.keyDown)
		}
		return {
			'aria-autocomplete': 'list',
			'aria-activedescendant':
				isOpen && typeof highlightedIndex === 'number' && highlightedIndex >= 0
					? this.getItemId(highlightedIndex)
					: null,
			'aria-controls': isOpen ? this.menuId : null,
			'aria-labelledby': this.labelId,
			autoComplete: 'off',
			value: inputValue,
			id: this.inputId,
			...events,
			...rest
		}
	}

	inputChange = (event: KeyboardEvent) => {
		const element = event.target as HTMLInputElement
		this.dispatch({
			type: AutocompleteChange.InputChange,
			value: element.value
		})
	}

	inputBlur = (event: Event) => {
		this.schedule(() => {
			const buttonIsActive =
				document &&
				!!document.activeElement &&
				!!document.activeElement.id &&
				document.activeElement.id == this.buttonId
			if (!this.interacting && !buttonIsActive)
				this.dispatch({type: AutocompleteChange.InputBlur})
		})
	}

	menuAttrs = (attrs: DOMAttrs = {}) => {
		return {
			role: 'listbox',
			'aria-labelledby': this.labelId,
			id: this.menuId,
			...attrs
		}
	}

	schedule(work: () => void, time?: number) {
		const id = setTimeout(work, time)
		this.clearCallbacks.push(() => clearTimeout(id))
	}

	buttonAttrs = (attrs: DOMAttrs = {}) => {
		const {onclick, onkeydown, onblur, ...rest} = attrs
		const {isOpen} = this.store
		const events = {
			onclick: callHandlers(onclick, this.buttonClick),
			onkeydown: callHandlers(onkeydown, this.keyDown),
			onblur: callHandlers(onblur, this.buttonBlur)
		}
		return {
			id: this.buttonId,
			type: 'button',
			role: 'button',
			'aria-label': isOpen ? 'close menu' : 'open menu',
			'aria-haspopup': true,
			...events,
			...rest
		}
	}

	buttonClick = (event: MouseEvent) => {
		const button = event.target as HTMLElement
		event.preventDefault()
		if (document.activeElement === document.body) button.focus()
		this.dispatch({type: AutocompleteChange.ButtonClick}, {async: true})
	}

	buttonBlur = (event: Event) => {
		const blurTarget = event.target
		this.schedule(() => {
			if (
				!this.interacting &&
				(document.activeElement == null ||
					document.activeElement.id !== this.inputId) &&
				document.activeElement !== blurTarget
			)
				this.dispatch({type: AutocompleteChange.ButtonBlur})
		})
	}

	keyArrowdown(event: KeyboardEvent) {
		event.preventDefault()
		const amount = event.shiftKey ? 5 : 1
		this.dispatch({
			type: AutocompleteChange.KeyArrowDown,
			amount,
			total: this.items.length
		})
	}

	keyArrowup(event: KeyboardEvent) {
		event.preventDefault()
		const amount = event.shiftKey ? -5 : -1
		this.dispatch({
			type: AutocompleteChange.KeyArrowUp,
			amount,
			total: this.items.length
		})
	}

	keyEnter(event: KeyboardEvent) {
		const {isOpen, highlightedIndex} = this.store
		if (!isOpen || highlightedIndex === null) return
		event.preventDefault()
		const item = this.items[highlightedIndex]
		// Todo: don't enable disabled items
		this.dispatch({
			type: AutocompleteChange.KeyEnter,
			item
		})
	}

	keyEscape(event: KeyboardEvent) {
		event.preventDefault()
		this.dispatch({
			type: AutocompleteChange.KeyEscape
		})
	}

	keyDown = (event: KeyboardEvent) => {
		switch (normalizeArrowKey(event)) {
			case 'ArrowUp':
				return this.keyArrowup(event)
			case 'ArrowDown':
				return this.keyArrowdown(event)
			case 'Escape':
				return this.keyEscape(event)
			case 'Enter':
				return this.keyEnter(event)
		}
	}

	dispatch(action: AutocompleteAction<Item>, options: {async?: boolean} = {}) {
		const {itemToString = (item: Item) => `${item}`, onselect} = this.attrs
		const {async} = options
		const {selectedItem: wasSelected} = this.store
		this.store.dispatch(action, {
			items: this.items,
			itemToString
		})
		const {selectedItem} = this.store
		if (wasSelected != selectedItem) if (onselect) onselect(selectedItem)
		if (async) m.redraw()
		else (m.redraw as any).sync()
	}

	labelAttrs = (attrs: DOMAttrs = {}) => {
		return {
			for: this.inputId,
			id: this.labelId,
			...attrs
		}
	}

	itemAttrs = (attrs: {item: Item} & DOMAttrs) => {
		const {item, onclick, onmousemove, onmousedown, onkeydown, ...rest} = attrs
		const {highlightedIndex} = this.store
		const index = this.items.length
		this.items.push(item)
		const events = {
			onclick: callHandlers(onclick, () => this.itemClick(index)),
			onmousemove: callHandlers(onmousemove, () => this.itemMouseMove(index)),
			onkeydown: callHandlers(onkeydown, this.keyDown)
		}
		const selected = highlightedIndex === index
		const scrollTo = selected && {
			onupdate: (vnode: VnodeDOM) => {
				if (this.avoidScrolling) return
				scrollIntoView(vnode.dom, {behavior: 'smooth', scrollMode: 'if-needed'})
			}
		}
		return {
			id: this.getItemId(index),
			role: 'option',
			'aria-selected': selected,
			...events,
			...scrollTo,
			...rest
		}
	}

	itemMouseMove(index: number) {
		const {highlightedIndex} = this.store
		if (index === highlightedIndex) return
		this.avoidScrolling = true
		this.dispatch({
			type: AutocompleteChange.ItemMouseEnter,
			index
		})
		this.schedule(() => (this.avoidScrolling = false), 250)
	}

	itemClick(index: number) {
		const item = this.items[index]
		this.dispatch({
			type: AutocompleteChange.ItemClick,
			item
		})
	}

	render() {
		this.items = []
		return this.children({
			...this.store,
			inputAttrs: this.inputAttrs,
			menuAttrs: this.menuAttrs,
			buttonAttrs: this.buttonAttrs,
			labelAttrs: this.labelAttrs,
			itemAttrs: this.itemAttrs
		})
	}
}
