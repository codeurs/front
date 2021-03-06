export enum AutocompleteChange {
	MouseUp = 'MouseUp',
	KeyArrowUp = 'KeyArrowUp',
	KeyArrowDown = 'KeyArrowDown',
	KeyEscape = 'KeyEscape',
	KeyHome = 'KeyHome',
	KeyEnd = 'KeyEnd',
	KeySpace = 'KeySpace',
	KeyEnter = 'KeyEnter',
	ItemMouseEnter = 'ItemMouseEnter',
	ItemClick = 'ItemClick',
	InputBlur = 'InputBlur',
	InputChange = 'InputChange',
	ButtonClick = 'ButtonClick',
	ButtonBlur = 'ButtonBlur'
}

export type AutocompleteAction<Item> =
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

export interface AutocompleteState<Item> {
	highlightedIndex: number | null
	inputValue: string | null
	isOpen: boolean
	selectedItem: Item | null
}

type AutocompleteProps<Item> = {
	items: Array<Item>
	itemToString: (item: Item) => string
}

type AutocompleteReducer<Item> = (
	state: AutocompleteState<Item>,
	action: AutocompleteAction<Item>,
	props: AutocompleteProps<Item>
) => AutocompleteState<Item>

export const autocompleteReducer = <Item>(
	state: AutocompleteState<Item>,
	action: AutocompleteAction<Item>,
	props: {
		items: Array<Item>
		itemToString: (item: Item) => string
	}
): AutocompleteState<Item> => {
	const {highlightedIndex} = state
	const reset = {selectedItem: null}
	switch (action.type) {
		case AutocompleteChange.ButtonClick:
			if (state.isOpen) return {...state, ...reset, isOpen: false}
			return {...state, ...reset, highlightedIndex: null, isOpen: true}
		case AutocompleteChange.KeyEscape:
		case AutocompleteChange.ButtonBlur:
		case AutocompleteChange.InputBlur:
		case AutocompleteChange.MouseUp:
			return {...state, ...reset, isOpen: false}
		case AutocompleteChange.ItemClick:
		case AutocompleteChange.KeyEnter:
			return {
				...state,
				isOpen: false,
				inputValue: props.itemToString(action.item),
				selectedItem: action.item
			}
		case AutocompleteChange.KeyArrowDown:
		case AutocompleteChange.KeyArrowUp:
			const next =
				(highlightedIndex === null ? -1 : highlightedIndex) + action.amount
			if (next < 0 || next >= action.total) return state
			return {...state, highlightedIndex: next}
		case AutocompleteChange.ItemMouseEnter:
			return {...state, highlightedIndex: action.index}
		case AutocompleteChange.InputChange:
			return {...state, ...reset, highlightedIndex: null, isOpen: true, inputValue: action.value}
	}
}

export class AutocompleteStore<Item> implements AutocompleteState<Item> {
	highlightedIndex: number | null = null
	inputValue: string | null = null
	isOpen: boolean = false
	selectedItem: Item | null = null
	private reducer: AutocompleteReducer<Item>

	constructor(reducer: AutocompleteReducer<Item> = autocompleteReducer) {
		this.reducer = reducer
	}

	dispatch = (
		action: AutocompleteAction<Item>,
		props: AutocompleteProps<Item>
	) => {
		return Object.assign(this, this.reducer(this, action, props))
	}
}
