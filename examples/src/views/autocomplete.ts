import './autocomplete.less'

import {Autocomplete, classes, m, View} from '@codeurs/front'
import countries from './countries'
import { AutocompleteStore } from '@codeurs/front/store/autocompletestore';

export default class extends View {
	autocomplete = new AutocompleteStore()
	render() {
		return m('div', [
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
						.filter(country => country.name.toLowerCase().includes(inputValue.toLowerCase()))
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