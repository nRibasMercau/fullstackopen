import axios from 'axios'

const baseGeoUrl = 'http://api.openweathermap.org/geo/1.0/direct'
const baseCurrentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather'

const api_key = process.env.REACT_APP_API_KEY

const getLatLong = (location) => {
    const request = axios.get(`${baseGeoUrl}?q=${location}&appid=${api_key}`)
    return request  
        .then(response => response.data)
        .catch(error => {
            alert('FATAL ERROR. Could not retrieve Lat Long.')
            console.log(error)
        })
}

const getCurrentWeather = (location) => {
    return axios.get(`${baseGeoUrl}?q=${location}&appid=${api_key}`)
        .then(response => {
            return axios.get(`${baseCurrentWeatherUrl}?lat=${response.data[0].lat}&lon=${response.data[0].lon}&units=metric&appid=${api_key}`)
                .then(response => response.data)
                .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
}


export default { getLatLong, getCurrentWeather }
