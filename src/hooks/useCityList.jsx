import {useState, useEffect} from 'react'
import axios from 'axios'
import { getWeatherUrl } from '../utils/urls'
import getAllWeather from '../utils/transform/getAllWeather'

const useCityList = (cities) => {
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {

            const url = getWeatherUrl({city, countryCode})
            
            // Define promise (completion or failure of an asynchronous operation)
            try {
                const response = await axios.get(url)
                const allWeatherAux = getAllWeather(response, city, countryCode)
                setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux}))
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
            setWeather(city, countryCode)
        })

    }, [cities])

    return { allWeather, error, setError }
}

export default useCityList