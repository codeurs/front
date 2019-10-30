import React, {useRef} from 'react'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import {action} from '@storybook/addon-actions'
import {Carousel, useCarousel} from '..'
import notes from './carousel.md'
import {text, boolean, number, select} from '@storybook/addon-knobs'
import {createGrid} from './grid'
import styled from '@emotion/styled'

const stories = storiesOf('Grid', module)

const {Grid, Column} = createGrid({
	s: '(max-width: 767px)',
	m: '(min-width: 768px)',
	l: '(min-width: 1200px)'
})

const Black = styled.div`
	background: black;
	color: white;
	padding: 15px;
`

const SimpleExample = () => {
	return (
		<Grid s={1} m={2} columns={8} gap={10}>
			<Column as={Black}>1</Column>
			<Column as={Black} span={3}>
				2-5
			</Column>
			<Column as={Black}>6</Column>
			<Column as={Black} offset={1} span={2}>
				8-9
			</Column>

			<Column as={Black} span={2}>
				1-2
			</Column>

			<Column as={Black}>3</Column>
			<Column as={Black} span={5}>
				4-9
			</Column>
		</Grid>
	)
}

stories.add('Simple', () => <SimpleExample />)
