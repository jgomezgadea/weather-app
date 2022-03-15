import React from 'react'
import { render, screen } from '@testing-library/react'
import CityInfo from './CityInfo' // SUT: Subject Under Testing

test("CityInfo render", async () => {
    /* AAA - Arrange Actuate Assert */

    const city = "Valencia"
    const country = "España"

    render(<CityInfo city={city} country={country}/>)

    const cityAndCountryComponents = await screen.findAllByRole("heading")

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})