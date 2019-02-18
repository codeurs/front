import './masonry.less'

import m, {Child} from 'mithril'
import {Component} from './component'

export class Masonry extends Component<{
	cols: number
	addClass?: (i: number, j: number) => string
	children: Array<Child>
}> {
	divide(items: Array<Child>, colsCount: number) {
		const cols: Array<Array<Child>> = Array(colsCount)
			.fill(null)
			.map(_ => [])
		items.forEach((item, i) => {
			const col = i % colsCount
			cols[col].push(item)
		})
		return cols
	}

	view() {
		const {children, cols: colsCount, addClass} = this.attrs
		const cols = this.divide(children, colsCount)
		return m('.masonry',
			cols.map((children, i) =>
				m('.masonry-col',
					{
						style: {
							'flex-basis': 100 / cols.length + '%'
						}
					},
					children.map((item, j) =>
						m('.masonry-item',
							{
								class: addClass ? addClass(i, j) : ''
							},
							item
						)
					)
				)
			)
		)
	}
}
