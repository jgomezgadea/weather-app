import React from 'react'
import CityList from './CityList'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Valencia", country: "España"},
    {city: "Pisa", country: "Italia"},
    {city: "Londres", country: "Reino Unido"},
    {city: "Dublín", country: "Irlanda"}
]

export const CityListExample = () => <CityList cities={cities} />
