
import React from 'react'
import PropTypes from 'prop-types'
import { WiDayCloudy, WiDayHaze, WiDaySunny, WiRain, WiRaindrop, WiSnow, WiThunderstorm } from 'react-icons/wi'

const stateByName = {
  clouds: WiDayCloudy,
  clear: WiDaySunny,
  rain: WiRain,
  snow: WiSnow,
  drizzle: WiRaindrop,
  thunderstorm: WiThunderstorm,
  haze: WiDayHaze,
}

export const validValues = Object.keys(stateByName)

const IconState = ({ state }) => {
    const StateByName = stateByName[state]
    return (
        <StateByName />
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired
}

export default IconState