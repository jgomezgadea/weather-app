import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    { hour: 17, state: "clear", temperature: 17, weekDay: "Jueves"},
    { hour: 15, state: "clouds", temperature: 16, weekDay: "Viernes"},
    { hour: 16, state: "rain", temperature: 14, weekDay: "Viernes"},
    { hour: 17, state: "snow", temperature: 15, weekDay: "Viernes"},
    { hour: 15, state: "thunderstorm", temperature: 12, weekDay: "Sábado"},
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)