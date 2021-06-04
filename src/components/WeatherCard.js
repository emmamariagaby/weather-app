import React from 'react';

const WeatherCard = (props) => {
    return (
        <>
            <img
                variant="top"
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="img"
            />
        </>
    );
};

export default WeatherCard;
