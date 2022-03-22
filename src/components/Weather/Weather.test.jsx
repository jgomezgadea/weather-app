import React from 'react'
import Weather from './Weather'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("Weather render sunny", async () => {

    render(<Weather temperature={10} state="clear" />)

    const temp = await screen.findByRole("heading")

    expect(temp).toHaveTextContent("10")
})


test("Weather render cloud", async () => {

    render(<Weather temperature={10} state="snow" />)

    const temp = await screen.findByRole("heading")

    expect(temp).toHaveTextContent("10")
})