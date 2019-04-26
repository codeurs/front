import './autocomplete.less'

import includes from 'core-js-pure/stable/string/includes'
import {Autocomplete, AutocompleteStore, classes, m, View} from '@codeurs/front'
import countries from './countries'

const dropdownOptions = [
	'a', 'b', 'c'
]

export default class extends View {
	autocomplete = new AutocompleteStore()
	selectedDropdownItem: string
	render() {
		return m('div', [
			m('h2', 'dropdown'),
			m('', 
				m(Autocomplete, {
					onselect: (item?: string) => {
						if (item) this.selectedDropdownItem = item
					}
				},
					({isOpen, selectedItem, itemAttrs, menuAttrs, buttonAttrs, highlightedIndex}) =>
						m('.dropdown', 
							m('button.dropdown-label', buttonAttrs(), this.selectedDropdownItem || 'Select something'),
							isOpen && m('.dropdown-menu', menuAttrs(),
								dropdownOptions.map((option, index) =>
									m('.dropdown-menu-item', itemAttrs({
										item: option,
										...classes({is: {active: highlightedIndex === index}})
									}), option)
								)
							)
						)	
				)
			),
			m('h2', 'autocomplete'),
			m('button', {
				onclick: e => {
					this.autocomplete.inputValue = 'Belgium'
				}
			}, 'Select Belgium'),
			m(Autocomplete, {
				store: this.autocomplete,
				onselect: country => console.log(country),
				itemToString: country => country.name
			}, ({
				isOpen,
				highlightedIndex,
				inputValue,
				inputAttrs, 
				menuAttrs, 
				itemAttrs,
				buttonAttrs
			}) => m('.autocomplete', [
				m('input', inputAttrs({
					placeholder: 'Search',
				})),
				m('button', buttonAttrs(), 'Toggle menu'),
				isOpen && m('ul', menuAttrs(),
				m('.autocomplete-menu', 
					countries
						.filter(country => includes(country.name.toLowerCase(), inputValue.toLowerCase()))
						.map((country, i) => 
							m('li.autocomplete-item', itemAttrs({
								key: country.code,
								item: country,
								...classes({is: {active: highlightedIndex == i}})
							}), country.name)
						))
				)
			]))
		])
	}
}