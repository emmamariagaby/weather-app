import React from 'react'
import WeatherCard from './WeatherCard';
import styled from 'styled-components';


const CardBodyContainer = styled.div`
margin: 1rem;
display: flex;
flex-flow: row wrap;
justify-content: center;
background-color: orange;
border: solid 0.5rem darkorange;
`;

const WeatherList = ({ weathers }) => {
    weathers.pop();
    return (
        <CardBodyContainer>
            {weathers.map(({ dt, temp, weather }) => (
                <div key={dt}>
                    <WeatherCard temp_max={temp.max} temp_min={temp.min} dt={dt * 1000} main={weather[0].main} icon={weather[0].icon} />
                </div>
            ))}
        </CardBodyContainer>
    )
}

export default WeatherList;