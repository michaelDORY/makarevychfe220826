import React, { MutableRefObject, useRef } from 'react'
import { render, screen } from '@testing-library/react'
import Chart from '../components/chart'
import { IChartItem } from '../components/chart/chart-item'

const mockItems: IChartItem[] = [
  { name: 'Landing Page', time: 7.4 },
  { name: 'Configurator', time: 0.2 },
  { name: 'Check-out', time: 7.0 },
  { name: 'Deal', time: 3.8 },
]

beforeEach(() => {
  jest.spyOn(React, 'useRef').mockReturnValue({
    current: 0,
  })
  const ref = jest.fn()
  render(<Chart currentIndentRef={ref as unknown as MutableRefObject<number>} items={mockItems} />)
})

test('Chart has chart items', () => {
  expect(screen.getByText(/configurator/i)).toBeInTheDocument()
  expect(screen.getByText(/check-out/i)).toBeInTheDocument()
})
