import React from 'react';

const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {
    const date = new Date(dt);
    return (
        <>
            <img
                variant="top"
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="img"
            />
            <p>{main}</p>
            <p>
                {date.toLocaleDateString()} - {date.toLocaleTimeString()}
            </p>
            <p>Min: {temp_min}</p>
            <p>Max: {temp_max}</p>
        </>
    );
};

export default WeatherCard;
