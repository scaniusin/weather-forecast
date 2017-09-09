import axios from 'axios';

const API_KEY = '4c5daa0ba88c56a60058c1042e72a36f';
// const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?`;

const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?`;

//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=4c5daa0ba88c56a60058c1042e72a36f
//api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  //const url = `${ROOT_URL}&q=${city},us`;
  const url = `${ROOT_URL}q=${city},uk&appid=${API_KEY}`;
  const request = axios.get(url);

  // console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

