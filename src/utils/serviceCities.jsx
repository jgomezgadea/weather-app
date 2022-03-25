const cities = [
    {city: "Valencia", country: "España", countryCode: "ES"},
    {city: "Pisa", country: "Italia", countryCode: "IT"},
    {city: "Londres", country: "Reino Unido", countryCode: "GB"},
    {city: "Dublín", country: "Irlanda", countryCode: "IE"}
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => (
    cities.filter(c => c.countryCode === countryCode)[0].country
)