import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from '@material-ui/lab'
import { Grid, List, ListItem } from '@material-ui/core'
import useCityList from '../../hooks/useCityList'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import { getCityCode } from '../../utils/utils'

const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, countryCode, country } = cityAndCountry
    // li: HTML item -> set to ListItem
    return (
        <ListItem button key={getCityCode(city, countryCode)}
            onClick={() => eventOnClickCity(city, countryCode) }>
            <Grid container justifyContent='center' alignItems='center'>
                <Grid item xs={12} md={9}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item xs={12} md={3}>
                   <Weather
                    temperature={weather && weather.temperature}
                    state={weather && weather.state} />
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {

    const { allWeather, error, setError } = useCityList(cities)

    // ul: HTML tag to create unordered lists -> set to List
    return (
        <div>
            {
                error && <Alert onClose={() => setError(null)} severity='error'>{error}</Alert>
            }
            <List>
                {
                    // Currying
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry,
                        allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
                }
            </List>
        </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList