import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const Weather = ({ location }) => {
    const weatherStyle = {
        fontFamily: 'sans-serif'
    }

    const [currentWeather, setCurrentWeather] = useState(null)

    const baseCurrentWeatherIconUrl = 'http://openweathermap.org/img/wn/'

    /*
    const [latlon, setLatLon] = useState({
        lat: null, 
        lon: null
    })
    const [currentWeather, setCurrentWeather] = useState([]) 


    useEffect(() => {
        weatherService
        .getLatLong(location)
        .then(geoData => {
            const newLatLon = {
                lat: geoData[0].lat, 
                lon: geoData[0].lon
            }
            setLatLon(newLatLon)
            weatherService
                .getCurrentWeather(latlon.lat, latlon.lon)
                .then(weatherData => {
                    setCurrentWeather(weatherData)
                    console.log(currentWeather)
                })
        })
    }, [])
    */
    useEffect(() => {
        weatherService
            .getCurrentWeather(location)
            .then(weatherData => {
                setCurrentWeather(weatherData)
            })
    }, [])

    if (currentWeather == null) return (
        <></>
    )
    return (
    <div style={weatherStyle}>
        <h3>Current weather in {location}</h3>
        <p>{currentWeather.weather[0].main}</p>
        <img src={`${baseCurrentWeatherIconUrl}${currentWeather.weather[0].icon}@2x.png`} />

        <p>Temperature: {currentWeather.main.temp} C (min:{currentWeather.main.temp_min} max:{currentWeather.main.temp_max})</p>
        <p>Feels like: {currentWeather.main.feels_like}</p>
        <p>Wind: {currentWeather.wind.speed} {currentWeather.wind.deg}</p>
        <p>Pressure: {currentWeather.main.pressure}</p>
        <p>Humidity: {currentWeather.main.humidity}</p>
    </div>
    )
}

export default Weather