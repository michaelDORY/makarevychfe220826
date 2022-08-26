import React from 'react'
import { render, screen } from '@testing-library/react'
import ChartItem, { BAR_WIDTH, IChartItem } from '../components/chart/chart-item'

const mockItem: IChartItem = { name: 'Landing Page', time: 7.4 }

beforeEach(() => {
  render(<ChartItem time={mockItem.time} indent={0} label={mockItem.name} allTime={300} />)
})

test('Active part has proper width', () => {
  expect(screen.getByTestId(/activePart/i)).toHaveStyle({ width: BAR_WIDTH * (7.4 / 300) + 'px' })
})
