import React from "react";
export default function WeatherCard({ weather }) {
    return (
        <div className="weather-card">
            <h2>{weather.country}</h2>
            <p>Capital: {weather.capital}</p>
            <p>Temperature: {weather.temperature}°C</p>
        </div>
    );
}