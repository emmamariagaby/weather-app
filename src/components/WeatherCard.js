import React from 'react';
import styled from 'styled-components';

const CardBody = styled.div`
padding: 1rem;
margin: 1rem;
text-align: center;
height: 280px;
width: 240px;
border-radius: 20px;
color: black;
background-color: lightgrey;
`;

const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {
    const date = new Date(dt);
    return (
        <CardBody>
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
        </CardBody>
    );
};

export default WeatherCard;