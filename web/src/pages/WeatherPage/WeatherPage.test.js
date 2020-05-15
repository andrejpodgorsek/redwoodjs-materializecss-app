import { render, cleanup } from '@testing-library/react'

import WeatherPage from './WeatherPage'

describe('WeatherPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<WeatherPage />)
    }).not.toThrow()
  })
})
