import React from 'react'
import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather
}

export const WeatherSnow = () => <Weather temperature={10} state="snow" />
export const WeatherClear = () => <Weather temperature={10} state="clear" />