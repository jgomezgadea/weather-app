import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
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

test("CityList click on item", async() => {
    const fnClickOnItem = jest.fn()

    render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await screen.findAllByRole("listitem")

    fireEvent.click(items[0])
    
    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})