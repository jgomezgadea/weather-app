import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Grid, List, ListItem } from '@material-ui/core'
import CityInfo from '../CityInfo'
import Weather from '../Weather'

const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, country } = cityAndCountry
    // li: HTML item -> set to ListItem
    return (
        <ListItem button key={city} onClick={eventOnClickCity}>
            <Grid container justifyContent='center' alignItems='center'>
                <Grid item xs={12} md={9}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item xs={12} md={3}>
                    {
                        weather ? 
                        (<Weather temperature={weather.temperature} state={weather.state} />)
                        :
                        ("No weather data")
                    }
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {
    
    const [allWeather, setAllWeather] = useState({})

    useEffect(() => {
        const setWeather = (city, country, countryCode) => {
            const appid = "dc1cb0c3c122c1544b398de241d69f13"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
            axios
            .get(url)
            .then(response => {
                const { data } = response
                const temperature = data.main.temp
                const state = data.weather[0].main.toLowerCase()

                const propName = `${city}-${country}`
                const propValue = { temperature, state }

                setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))
            })
        }

        cities.forEach(({ city, country, countryCode }) => {
            setWeather(city, country, countryCode)
        })

    }, [cities])
    

   //const weather = {temperature: 10, state: "sunny"}
  // ul: HTML tag to create unordered lists -> set to List
  return (
    <List>
        {
            // Currying
            cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry,
                allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
        }
    </List>
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