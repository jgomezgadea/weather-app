import React from 'react'
import { useHistory } from 'react-router-dom'
import { Paper } from '@material-ui/core'
import AppFrame from '../components/AppFrame'
import CityList from '../components/CityList'

const cities = [
    {city: "Valencia", country: "España"},
    {city: "Pisa", country: "Italia"},
    {city: "Londres", country: "Reino Unido"},
    {city: "Dublín", country: "Irlanda"}
]

const MainPage = () => {
    const history = useHistory()

    const onClickHandler = () => {
        history.push("/city")
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={cities} onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage