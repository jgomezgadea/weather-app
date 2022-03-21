import React from 'react'
import Forecast from './Forecast'
import { render, screen } from '@testing-library/react'

const forecastItemList = [
    { hour: 17, state: "sunny", temperature: 17, weekDay: "Jueves"},
    { hour: 15, state: "cloud", temperature: 16, weekDay: "Viernes"},
    { hour: 16, state: "cloudy", temperature: 14, weekDay: "Viernes"},
    { hour: 17, state: "fog", temperature: 15, weekDay: "Viernes"},
    { hour: 15, state: "rain", temperature: 12, weekDay: "Sábado"},
]

test('Forecast render', async () => {
    render(<Forecast forecastItemList={forecastItemList} />)

    const forecastItems = await screen.findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(5)
})