import React, { useState, useEffect } from 'react';
import './App.css';
import Fetch from './components/Fetch';
import WeatherList from './components/WeatherList';
import styled from 'styled-components';

const Header = styled.div`
background-image: none;
background-color: transparent;
padding: 2rem;
font-size: 40px;
color: grey;
font-weight: bolder;
`;

const HeaderFetchContent = styled.div`
margin: 1rem;
font-size: 30px;
color: grey;
font-weight: light;
`;

const App = () => {
  const { data, error, isLoading, setUrl } = Fetch();
  const [city, setCity] = useState('');

  useEffect(() => {
    console.log(city)
  }, [city]);

  const ENDPOINT = 'https://api.openweathermap.org/';
  const PART = 'hourly,minutely,current,alerts';
  const KEY = '3cfb96dd5ec2730ca9ea11397535e2b7';

  const STHLM = ['59.32', '18.06'];
  const BERLIN = ['52.52', '13.40'];
  const OSLO = ['59.91', '10.75'];
  let url = "";

  function createUrl(event) {
    setCity(event.target.value);
    console.log(city + 34)
    let lat = '';
    let lon = '';

    if (city === 'sthlm') {
      lat = STHLM[0];
      lon = STHLM[1];
    } else if (city === 'berlin') {
      lat = BERLIN[0];
      lon = BERLIN[1];
    } else {
      lat = OSLO[0];
      lon = OSLO[1];
    }
    url = `${ENDPOINT}data/2.5/onecall?lat=` + lat + `&lon=` + lon + `&exclude=${PART}&units=metric&appid=${KEY}`;
    setUrl(url);
  };

  const fetchContent = () => {
    if (error) return <HeaderFetchContent>Error when fetching: {error}</HeaderFetchContent>
    if (!data && isLoading) return <HeaderFetchContent>LOADING...</HeaderFetchContent>
    if (!data) return null;
    return <WeatherList weathers={data.daily} />
  };

  return (
    <div className="App">
      <Header>Weather app</Header>
      <select className="select" value={city} onChange={event => createUrl(event)}>
        <option value='cities'> -- choose city -- </option>
        <option value='sthlm'> STOCKHOLM </option>
        <option value='berlin'> BERLIN </option>
        <option value='oslo'> OSLO </option>
      </select>

      {fetchContent()}

    </div>
  );
}

export default App;
