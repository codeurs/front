import {Children, VnodeDOM} from 'mithril'
import scrollIntoView from 'scroll-into-view-if-needed'
import {DOMAttrs, m} from '../hyperscript'
import {View} from '../ui/view'

enum AutocompleteChange {
	MouseUp,
	KeyArrowUp,
	KeyArrowDown,
	KeyEscape,
	KeyHome,
	KeyEnd,
	KeySpace,
	KeyEnter,
	ItemMouseEnter,
	ItemClick,
	InputBlur,
	InputChange,
	ButtonClick,
	ButtonBlur
}

type AutocompleteAction<Item> =
	| {type: AutocompleteChange.KeyEscape}
	| {type: AutocompleteChange.ButtonBlur}
	| {type: AutocompleteChange.ButtonClick}
	| {type: AutocompleteChange.InputBlur}
	| {type: AutocompleteChange.MouseUp}
	| {type: AutocompleteChange.KeyArrowDown; amount: number; total: number}
	| {type: AutocompleteChange.KeyArrowUp; amount: number; total: number}
	| {type: AutocompleteChange.KeyEnter; item: Item}
	| {type: AutocompleteChange.ItemClick; item: Item}
	| {type: AutocompleteChange.ItemMouseEnter; index: number}
	| {type: AutocompleteChange.InputChange; value: string}

type AutocompleteState<Item> = {
	highlightedIndex: number | null
	inputValue: string | null
	isOpen: boolean
	selectedItem: Item | null
}

type ItemAttrs<Item> = {
	item: Item
} & DOMAttrs

type AutocompleteApi<Item> = (
	api: AutocompleteState<Item> & {
		inputAttrs: (attrs: DOMAttrs) => DOMAttrs
		menuAttrs: (attrs: DOMAttrs) => DOMAttrs
		buttonAttrs: (attrs: DOMAttrs) => DOMAttrs
		labelAttrs: (attrs: DOMAttrs) => DOMAttrs
		itemAttrs: (attrs: ItemAttrs<Item>) => DOMAttrs
	}
) => Children

const callFunctions = (...fns: Array<Function>) => (...args: Array<any>) =>
	fns.forEach(fn => fn && fn(...args))

const callHandlers = (...fns: Array<Function>) => (
	event: Event & {redraw: boolean}
) => {
	event.redraw = false
	return callFunctions(...fns)(event)
}

const autocompleteReducer = <Item>(
	state: AutocompleteState<Item>,
	action: AutocompleteAction<Item>
): AutocompleteState<Item> => {
	const {highlightedIndex} = state
	const reset = {highlightedIndex: null, selectedItem: null}
	switch (action.type) {
		case AutocompleteChange.ButtonClick:
			return {...state, ...reset, isOpen: !state.isOpen}
		case AutocompleteChange.KeyEscape:
		case AutocompleteChange.ButtonBlur:
		case AutocompleteChange.InputBlur:
		case AutocompleteChange.MouseUp:
			return {...state, ...reset, isOpen: false}
		case AutocompleteChange.ItemClick:
		case AutocompleteChange.KeyEnter:
			return {...state, isOpen: false, selectedItem: action.item}
		case AutocompleteChange.KeyArrowDown:
		case AutocompleteChange.KeyArrowUp:
			const next =
				(highlightedIndex === null ? -1 : highlightedIndex) + action.amount
			if (next < 0 || next >= action.total) return state
			return {...state, highlightedIndex: next}
		case AutocompleteChange.ItemMouseEnter:
			return {...state, highlightedIndex: action.index}
		case AutocompleteChange.InputChange:
			return {...state, ...reset, isOpen: true, inputValue: action.value}
	}
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
		onselect?: (item: Item) => void
		itemToString?: (item: Item) => string
		children: AutocompleteApi<Item>
	},
	HTMLElement
> {
	static instanceCount = 0

	state: AutocompleteState<Item> = {
		highlightedIndex: null,
		inputValue: null,
		isOpen: false,
		selectedItem: null
	}

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

	onCreate(dom: HTMLElement) {
		const onMouseDown = () => (this.interacting = true)
		const onMouseUp = (event: Event) => {
			const target = event.target as HTMLElement
			const {isOpen} = this.state
			this.interacting = false
			if (isOpen && !isOrContainsNode(dom, target))
				this.dispatch({type: AutocompleteChange.MouseUp})
		}
		dom.addEventListener('mousedown', onMouseDown)
		window.addEventListener('mouseup', onMouseUp)
		dom.addEventListener('touchstart', onMouseDown)
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
		const {inputValue, isOpen, highlightedIndex} = this.state
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
		const {isOpen} = this.state
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
		const {isOpen, highlightedIndex} = this.state
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
		const {async} = options
		const oldState = this.state
		this.state = autocompleteReducer(oldState, action)
		if (oldState != this.state) {
			const {onselect, itemToString} = this.attrs
			const {selectedItem} = this.state
			if (oldState.selectedItem != selectedItem && selectedItem) {
				if (onselect) onselect(selectedItem)
				this.state.inputValue = itemToString
					? itemToString(selectedItem)
					: `${selectedItem}`
			}
			if (async) m.redraw()
			else (m.redraw as any).sync()
		}
	}

	labelAttrs = (attrs: DOMAttrs) => {
		return {
			for: this.inputId,
			id: this.labelId,
			...attrs
		}
	}

	itemAttrs = (attrs: {item: Item} & DOMAttrs) => {
		const {item, onclick, onmousemove, onmousedown, onkeydown, ...rest} = attrs
		const {highlightedIndex} = this.state
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
		const {highlightedIndex} = this.state
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
		const {children} = this.attrs
		this.items = []
		return children({
			...this.state,
			inputAttrs: this.inputAttrs,
			menuAttrs: this.menuAttrs,
			buttonAttrs: this.buttonAttrs,
			labelAttrs: this.labelAttrs,
			itemAttrs: this.itemAttrs
		})
	}
}
