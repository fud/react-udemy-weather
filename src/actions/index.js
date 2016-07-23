import axios from 'axios';

const API_KEY = 'e20c6003360730618e0e90d176d57c9f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},au`;
  const request = axios.get(url);
  
  // returning the promise from axios in the
  // payload. redux-promise, unwraps the promise.
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
