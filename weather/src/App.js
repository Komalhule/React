import React, { useState } from 'react';
import './App.scss';

const WeatherApp = () => {
  const [city, setCity] = useState('New York');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    const apiKey = '17b6108f2661def481dfbfd4c5954c63';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
        setError(null);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setWeather(null);
      setError(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city name"
          required
        />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-info">
          <h2>Weather in {city}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;