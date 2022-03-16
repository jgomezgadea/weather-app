import React from 'react'
import WeatherDetails from './WeatherDetails'
import { render, screen } from '@testing-library/react'

test("WeatherDetails render", async () => {
    render(<WeatherDetails humidity={80} wind={10} />)

    // findByText with REGEXP
    const humidity = await screen.findByText(/80/)
    const wind = await screen.findByText(/10/)

    expect(humidity).toHaveTextContent("Humedad: 80%")
    expect(wind).toHaveTextContent("Viento: 10 km/h")
})