import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import Main from '../pages/main'

beforeEach(() => {
  render(<Main />)
})

test('Main Page contains heading', () => {
  expect(screen.getByText(/spent time/i)).toBeInTheDocument()
})

test('After button click data updates', () => {
  const button = screen.getByText(/update/i)

  expect(screen.getByText(/7.4/)).toBeInTheDocument()
  expect(screen.getByText(/0.2/)).toBeInTheDocument()
  expect(screen.getByText(/3.8/)).toBeInTheDocument()

  fireEvent(
    button,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  )

  waitFor(() => {
    expect(screen.queryByText(/7.4/)).not.toBeInTheDocument()
  })
})
