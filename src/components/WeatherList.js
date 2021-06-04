import React from 'react'
import WeatherCard from './WeatherCard';

const WeatherList = ({ weathers }) => {
    return (
        <>
            {weathers.map(({ dt, temp, weather }) => (
                <div key={dt}>
                    <WeatherCard temp_max={temp.max} temp_min={temp.min} dt={dt * 1000} main={weather[0].main} icon={weather[0].icon} />
                </div>
            ))}
        </>
    )
}

export default WeatherList;