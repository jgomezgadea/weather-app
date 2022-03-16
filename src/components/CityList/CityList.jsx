import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo'
import Weather from '../Weather'

const renderCityAndCountry = cityAndCountry => {
    const { city, country } = cityAndCountry
    // li: HTML item
    return (
        <li key={city}>
            <CityInfo city={city} country={country} />
            <Weather temperature={10} state="sunny" />
        </li>
    )
}

const CityList = ({ cities }) => {
  // ul: HTML tag to create unordered lists
  return (
    <ul>
        {
            cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))
        }
    </ul>
  )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default CityList