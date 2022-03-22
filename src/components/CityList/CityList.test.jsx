import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CityList from "./CityList"

const cities = [
    {city: "Valencia", country: "España", countryCode: "ES"},
    {city: "Pisa", country: "Italia", countryCode: "IT"},
    {city: "Londres", country: "Reino Unido", countryCode: "GB"},
    {city: "Dublín", country: "Irlanda", countryCode: "IE"}
]

test("CityList renders", async() => {

    render(<CityList cities={cities} onClickCity={() => {}} />)

    const items = await screen.findAllByRole("button")

    expect(items).toHaveLength(4)
})

test("CityList click on item", async() => {
    const fnClickOnItem = jest.fn()

    render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await screen.findAllByRole("button")

    fireEvent.click(items[0])
    
    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})