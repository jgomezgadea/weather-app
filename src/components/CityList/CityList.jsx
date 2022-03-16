import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import CityInfo from '../CityInfo'
import Weather from '../Weather'

const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry
    // li: HTML item
    return (
        <li key={city} onClick={eventOnClickCity}>
            <Grid container justify='center' alignItems='center'>
                <Grid item xs={12} md={8}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Weather temperature={10} state="sunny" />
                </Grid>
            </Grid>
        </li>
    )
}

const CityList = ({ cities, onClickCity }) => {
  // ul: HTML tag to create unordered lists
  return (
    <ul>
        {
            // Currying
            cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
        }
    </ul>
  )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList