import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    { hour: 17, state: "sunny", temperature: 17, weekDay: "Jueves"},
    { hour: 15, state: "cloud", temperature: 16, weekDay: "Viernes"},
    { hour: 16, state: "cloudy", temperature: 14, weekDay: "Viernes"},
    { hour: 17, state: "fog", temperature: 15, weekDay: "Viernes"},
    { hour: 15, state: "rain", temperature: 12, weekDay: "Sábado"},
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)