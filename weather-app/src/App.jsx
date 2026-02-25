import React from 'react';
import { useState } from "react";
import SearchBar from "./components/searchbar";
import WeatherCard from "./components/weatherCard";
export default function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  function getCountryAndWeather(countryName) {
    setError(null);

    const countryApiUrl = `https://restcountries.com/v3.1/name/${countryName}`;

    fetch(countryApiUrl)
      .then((response) => {
        if (!response.ok) {
          alert("Country not found");
        }
        return response.json();
      })
      .then((countryData) => {
        const country = countryData[0];

        const countryName = country.name.common;
        const capitalCity = country.capital[0];
        const lat = country.capitalInfo.latlng[0];
        const lon = country.capitalInfo.latlng[1];

        const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

        return fetch(weatherApiUrl).then((response) => {
          if (!response.ok) {
            throw new Error("Weather fetch failed");
          }
          return response.json().then((weatherData) => {
            const currentTemperature =
              weatherData.current_weather.temperature;

            // 🔥 Store everything in state
            setWeather({
              country: countryName,
              capital: capitalCity,
              temperature: currentTemperature,
            });
          });
        });
      })
      .catch((error) => {
        setError(error.message);
        setWeather(null);
      });
  }
  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar onSearch={getCountryAndWeather} />
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}