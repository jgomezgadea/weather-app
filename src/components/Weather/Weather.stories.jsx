import React from 'react'
import Weather from './Weather'
import { validValues } from '../IconState'

export default {
    title: "Weather",
    component: Weather,
    argTypes: {
        temperature: { control: { type: "number" }},
        state: { control: { type: "select", options: validValues }},
    }
}

const Template = (args) => <Weather {...args} />

export const WeatherSnow = Template.bind({}) 
WeatherSnow.args = { temperature: 10, state: "snow" }

export const WeatherClear = Template.bind({})
WeatherClear.args = { temperature: 10, state: "clear" }