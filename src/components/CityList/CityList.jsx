import React from 'react'
import PropTypes from 'prop-types'
import { Grid, List, ListItem } from '@material-ui/core'
import CityInfo from '../CityInfo'
import Weather from '../Weather'

const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
    const { city, country } = cityAndCountry
    // li: HTML item -> set to ListItem
    return (
        <ListItem button key={city} onClick={eventOnClickCity}>
            <Grid container justifyContent='center' alignItems='center'>
                <Grid item xs={12} md={9}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Weather temperature={10} state="sunny" />
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {
  // ul: HTML tag to create unordered lists -> set to List
  return (
    <List>
        {
            // Currying
            cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
        }
    </List>
  )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList