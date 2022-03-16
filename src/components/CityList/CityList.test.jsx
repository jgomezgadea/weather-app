import React from 'react'
import { render, screen } from '@testing-library/react'
import CityList from "./CityList"

const cities = [
    {city: "Valencia", country: "España"},
    {city: "Pisa", country: "Italia"},
    {city: "Londres", country: "Reino Unido"},
    {city: "Dublín", country: "Irlanda"}
]

test("CityList renders", async() => {

    render(<CityList cities={cities} />)

    const items = await screen.findAllByRole("listitem")

    expect(items).toHaveLength(4)
})