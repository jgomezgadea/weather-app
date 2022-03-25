import {useState, useEffect} from 'react'
import axios from 'axios'
import { getWeatherUrl } from '../utils/urls'
import getAllWeather from '../utils/transform/getAllWeather'
import { getCityCode } from '../utils/utils'

const useCityList = (cities, allWeather, onSetAllWeather) => {
    // const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {

            const url = getWeatherUrl({city, countryCode})
            
            // Define promise (completion or failure of an asynchronous operation)
            try {
                const propName = getCityCode(city, countryCode)
                onSetAllWeather({ [propName]: {} })
    
                const response = await axios.get(url)

                const allWeatherAux = getAllWeather(response, city, countryCode)
                onSetAllWeather(allWeatherAux)
            } catch (error) {
                if (error.response) {
                    setError("Error with the weather server")
                } else if (error.request) {
                    setError("Error connecting with the weather server")
                } else {
                    setError("Error loading weather data")
                }

            }
        }

        cities.forEach(({ city, countryCode }) => {
            if (!allWeather[getCityCode(city, countryCode)]) {
                setWeather(city, countryCode)
            }
        })

    }, [cities, allWeather, onSetAllWeather])

    return { error, setError }
}

export default useCityList