import {useState, useEffect} from 'react'
import axios from 'axios'
import convertUnits from 'convert-units'
import { validValues } from '../components/IconState'
import { getCityCode } from '../utils/utils'

const useCityList = (cities) => {
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const appid = "dc1cb0c3c122c1544b398de241d69f13"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
            
            // Define promise (completion or failure of an asynchronous operation)
            
            try {
                const response = await axios.get(url) 
            
                const { data } = response
                const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
                const stateFromServer = data.weather[0].main.toLowerCase()

                const state = validValues.includes(stateFromServer) ? stateFromServer : null

                const propName = getCityCode(city, countryCode)
                const propValue = { temperature, state }

                setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))
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