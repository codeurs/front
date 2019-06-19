import './masonry.less'

import {ComponentChild} from 'preact'
import {m} from '../hyperscript'
import {View} from './view'

export class Masonry extends View<{
	cols: number
	children: Array<ComponentChild>
}> {
	divide(items: Array<ComponentChild>, colsCount: number) {
		const cols: Array<Array<ComponentChild>> = Array(colsCount)
			.fill(null)
			.map(_ => [])
		items.forEach((item, i) => {
			const col = i % colsCount
			cols[col].push(item)
		})
		return cols
	}

	render() {
		const {children, cols: colsCount} = this.attrs
		const cols = this.divide(children, colsCount)
		return (
			<div
				class="masonry"
				{...cols.map((children, i) => (
					<div
						class="masonry-col"
						style={{
							flexBasis: 100 / cols.length + '%'
						}}
					>
						{children.map((item, j) => (
							<div class="masonry-item">{item}</div>
						))}
					</div>
				))}
			/>
		)
	}
}
