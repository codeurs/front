import React, {
	createContext,
	FunctionComponent,
	useContext,
	HTMLAttributes,
	ElementType,
	ComponentType
} from 'react'
import styled from '@emotion/styled'

type Size = number | string | undefined
type Gap = Size | [Size, Size] | {x: Size} | {y: Size} | {x: Size; y: Size}

type GridBase = {
	columns?: number
	gap?: Gap
	span?: number
}

type GridContext = GridBase & {
	media?: {
		[key: string]: GridContext
	}
}

type Align = 'top' | 'middle' | 'bottom' | undefined

const flexAlign = (align: Align) => {
	switch (align) {
		case 'top':
			return 'flex-start'
		case 'middle':
			return 'center'
		case 'bottom':
			return 'flex-end'
		default:
	}
}

const rem = (value: Size) =>
	typeof value === 'number' ? `${value / 16}rem` : value

const perc = (value: number) => `${value * 100}%`

type Grid = {
	span?: number
	columns?: number
	gap?: Gap
	align?: Align
} & HTMLAttributes<HTMLDivElement>

type GridProvider = {
	columns?: number
	gap?: Gap
	span?: number
}

type Column<P = HTMLAttributes<HTMLDivElement>> = {
	span?: number
	offset?: number
	as?: ComponentType<P> | ElementType<P>
} & P

const GridContext = createContext<GridContext>(undefined as any)

const gapSize = (gap: Gap): [Size, Size] => {
	if (gap === undefined) return [undefined, undefined]
	if (Array.isArray(gap)) return gap
	if (typeof gap === 'number' || typeof gap === 'string') return [gap, gap]
	if ('x' in gap && 'y' in gap) return [gap.x, gap.y]
	if ('x' in gap) return [gap.x, gap.x]
	return [undefined, gap.y]
}

const gridStyles = (grid: GridContext) => {
	const [x = 0, y = 0] = gapSize(grid.gap)
	const left = `-${rem(x)}`
	const top = `-${rem(y)}`
	return `
		margin-left: ${left};
		margin-top: ${top};
	`
}

const GridContainer = styled.div<{
	queries: {[key: string]: string}
	grid: GridContext
	align?: Align
}>(props => {
	return `
		box-sizing: border-box;
		min-width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: ${flexAlign(props.align)};
		${gridStyles(props.grid)}
		
		${Object.entries(props.queries)
			.map(
				([key, query]) =>
					`
					@media ${query} {
						${gridStyles(mergeGrid(props.grid, props.grid.media![key]))};
					}
				`
			)
			.join('\n')}
	`
})

const columnStyles = (grid: GridContext, column: Column) => {
	const span = column.span || grid.span || 1
	const width = grid.columns ? Math.min(span, grid.columns) : span
	const [x = 0, y = 0] = gapSize(grid.gap)
	const gap = rem(x)
	const top = rem(y)
	const grow = grid.columns ? 0 : width
	const basis = grid.columns
		? `calc(${perc(width / grid.columns)} - ${gap})`
		: 0
	const offset =
		grid.columns && grid.columns < width + column.offset!
			? grid.columns - width
			: column.offset!
	const left = column.offset
		? `calc(${gap} + ${perc(offset / grid.columns!)})`
		: gap
	return `
		flex: ${grow} 0 ${basis};
		margin-left: ${left};
		margin-top: ${top};
	`
}

const ColumnContainer = styled.div<{
	queries: {[key: string]: string}
	grid: GridContext
	column: Column & {media: {[key: string]: Column}}
}>(
	props => `
		box-sizing: border-box;
		min-width: 0;
		${columnStyles(props.grid, props.column)}
		
		${Object.entries(props.queries)
			.map(
				([key, query]) =>
					`
					@media ${query} {
						${columnStyles(mergeGrid(props.grid, props.grid.media![key]), {
							...props.column,
							...props.column.media[key]
						})}
					}
				`
			)
			.join('\n')};
	`
)

const mergeGap = (a: Gap, b: Gap): Gap => {
	const [x0, y0] = gapSize(a)
	const [x1, y1] = gapSize(b)
	const x = x1 !== undefined ? x1 : x0
	const y = y1 !== undefined ? y1 : y0 !== undefined ? y0 : x
	return [x, y]
}

const mergeGrid = (a: GridContext, b: GridContext | undefined): GridContext => {
	if (!a) return mergeGrid({media: {}}, b)
	if (!b) return mergeGrid(a, {media: {}})
	const grid: GridContext = {
		columns: b.columns || a.columns,
		gap: mergeGap(a.gap, b.gap),
		span: b.span || a.span
	}
	const res: GridContext = {
		...grid,
		media: {}
	}
	const media = Object.keys(a.media || {}).concat(Object.keys(b.media || {}))
	media.forEach(key => {
		res.media![key] = mergeGrid(
			grid,
			mergeGrid((a.media || {})[key], (b.media || {})[key])
		)
	})
	return res
}

export const createGrid = <
	T extends {
		[key: string]: string
	}
>(
	queries: T
) => {
	const Grid: FunctionComponent<
		Grid & {[P in keyof T]?: number | GridBase}
	> = ({children, span, columns, gap, align, ...props}) => {
		const parent = useContext(GridContext)
		const media: {[key: string]: GridContext} = {}
		const rest: {[key: string]: any} = {}
		Object.entries(props).forEach(([k, v]) => {
			if (k in queries)
				media[k] = typeof v === 'number' ? {columns: v} : (v as GridContext)
			else rest[k] = v
		})
		const grid = mergeGrid(parent, {
			span,
			columns,
			gap,
			media
		})
		return (
			<GridContainer queries={queries} align={align} grid={grid} {...rest}>
				<GridContext.Provider value={grid}>{children}</GridContext.Provider>
			</GridContainer>
		)
	}
	const Column: FunctionComponent<Column & {[P in keyof T]?: number}> = ({
		children,
		span,
		offset,
		...props
	}) => {
		const grid = useContext(GridContext)
		if (!grid) throw new Error('Column used outside of grid')
		const column = {span, offset}
		const rest: {[key: string]: any} = {}
		const media: {[key: string]: Column} = {}
		const sub: {[key: string]: GridContext} = {}
		Object.entries(props).forEach(([k, v]) => {
			if (k in queries) {
				const col: Column = typeof v === 'number' ? {span: v} : (v as Column)
				media[k] = col
			} else {
				rest[k] = v
			}
		})
		Object.entries(queries).forEach(([key, _]) => {
			const col = {...column, ...media[key]}
			const ctx = mergeGrid(grid, grid.media && grid.media[key])
			sub[key] = {
				...col,
				span: undefined,
				columns:
					(media[key] && media[key].span) || Math.min(ctx.columns!, ctx.span!)
			}
		})
		return (
			<ColumnContainer
				queries={queries}
				grid={grid}
				column={{...column, media}}
				{...rest}
			>
				{grid.columns ? (
					<GridContext.Provider
						value={{
							...grid,
							columns: span,
							media: sub
						}}
					>
						{children}
					</GridContext.Provider>
				) : (
					children
				)}
			</ColumnContainer>
		)
	}
	const GridProvider: FunctionComponent<
		GridProvider & {[P in keyof T]?: number}
	> = ({children, ...value}) => {
		return <GridContext.Provider value={value}>{children}</GridContext.Provider>
	}
	return {
		Grid,
		GridProvider,
		Column
	}
}
