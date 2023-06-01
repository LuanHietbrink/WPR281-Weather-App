import React, { useState } from 'react';
import axios from 'axios';

//Import weather Icons
import clearIcon from './assets/clear.png';
import cloudsIcon from './assets/clouds.png';
import drizzleIcon from './assets/drizzle.png';
import mistIcon from './assets/mist.png';
import rainIcon from './assets/rain.png';
import snowIcon from './assets/snow.png';
import windIcon from './assets/wind.png';
import humidityIcon from './assets/humidity.png';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');//set location as blank
  const [weatherIcon, setWeatherIcon] = useState('');//set weather icon as blank
  const [unit, setUnit] = useState('metric'); // default unit is metric
  const [error, setError] = useState(false);

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      setUnit('metric'); // Set the unit back to metric

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?zip=${location},za&units=${unit}&appid=30eec3809a2191f222b0172e1b95a4c7`
        )
        .then((response) => {
          setData(response.data);
          setError(false);
          console.log(response.data);

          const mainWeather = response.data.weather[0].main;
          //Displays Icon based on weather recieved form the API
          switch (mainWeather) {
            case 'Clear':
              setWeatherIcon(clearIcon);
              break;
            case 'Clouds':
              setWeatherIcon(cloudsIcon);
              break;
            case 'Drizzle':
              setWeatherIcon(drizzleIcon);
              break;
            case 'Humidity':
              setWeatherIcon(humidityIcon);
              break;
            case 'Mist':
              setWeatherIcon(mistIcon);
              break;
            case 'Rain':
              setWeatherIcon(rainIcon);
              break;
            case 'Snow':
              setWeatherIcon(snowIcon);
              break;
            case 'Wind':
              setWeatherIcon(windIcon);
              break;
            default:
              // Handle the case when mainWeather doesn't match any of the above conditions
              break;
          }
        })
        .catch((error) => {
          setError(true);
          console.error('Error fetching weather data:', error);
        });
      
      //Clear the location after pressing enter
      setLocation('');
    }
  };

  const toggleUnit = () => {
    //If statement to change units
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(newUnit);
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Zip code"
          type="text"
        />

        <br />
      </div>
      <div className="container">
        {error ? (
          <div className="error-page">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The weather information for the provided location could not be found.</p>
          </div>
        ) : (
          <>
            <div className="top">
              <div className="location">
                <p>{data.name}</p>
              </div>
              <div className="temp">
                {data.main ? (
                  <h1 id="maintemp">
                    {unit === 'metric'
                      ? `${data.main.temp.toFixed()}°C`
                      : `${((data.main.feels_like * 9) / 5 + 32).toFixed()}°F`}
                  </h1>
                ) : null}
              </div>
              <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
              </div>
            </div>
            <div>
              {data.weather ? <img src={weatherIcon} alt="weather icon" className="weather-icon" /> : null}
            </div>
            <div>
              {data.weather ?
              <button id="change" onClick={toggleUnit}>
                {unit === "metric" ? "Change to Fahrenheit" : "Change to Celsius"}
              </button>
              : null}
            </div>
            {data.name !== undefined && (
              <div className="bottom">
                <div className="feels">
                  {data.main ? (
                    <p className="bold">
                      {unit === 'metric'
                        ? `${data.main.feels_like.toFixed()}°C`
                        : `${((data.main.feels_like * 9) / 5 + 32).toFixed()}°F`}
                    </p>
                  ) : null}
                  <p>Feels Like</p>
                </div>
                <div className="humidity">
                  {data.main ? (
                    <p className="bold">{data.main.humidity}%</p>
                  ) : null}
                  <p>Humidity</p>
                </div>
                <div className="wind">
                  {data.wind ? (
                    <p className="bold">{data.wind.speed.toFixed()} KPH</p>
                  ) : null}
                  <p>Wind Speed</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
