import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Valencia", country: "España", countryCode: "ES"},
    {city: "Pisa", country: "Italia", countryCode: "IT"},
    {city: "Londres", country: "Reino Unido", countryCode: "GB"},
    {city: "Dublín", country: "Irlanda", countryCode: "IE"}
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click on city")} />
