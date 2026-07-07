import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const Weather = (coordinates) => {
    const [weather, setWeather] = useState(null);
    const lat = coordinates.coordinates[0]
    const lng = coordinates.coordinates[1]

    useEffect(() => {
        weatherService
            .getWeather(lat, lng)
            .then(result => {
                setWeather(result)
            })

    }, [lat, lng])

    if (!weather) return null

    return (
        <div>
            <p>Temperature {weather ? weather.main.temp : null} Celsius</p>
            {weather ? <img
                src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}
                alt={weather.weather[0].description}
            /> : null}
            <p>Wind {weather ? weather.wind.speed : null} m/s</p>
        </div>
    )
}

export default Weather