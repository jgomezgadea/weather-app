import React from 'react'
import ForecastItem from './ForecastItem'
import { render, screen } from '@testing-library/react'

test('ForecastItem render', async () => { 
    render(<ForecastItem hour={10} state="sunny" temperature={23} weekDay="Lunes" />)

    const temp = await screen.findByText(/23/)

    expect(temp).toHaveTextContent("23 °")
})