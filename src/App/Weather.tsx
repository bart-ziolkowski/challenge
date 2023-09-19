import React, { FC, useEffect, useState } from "react";

interface WeatherProps {
  city: string | null;
}

const Weather: FC<WeatherProps> = ({ city }: WeatherProps) => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: null as string | null,
    country: null as string | null,
    temp: null as number | null,
    icon: null as string | null,
    description: null as string | null,
  });

  const API_KEY = "4c4f0b1876954338598a7be96c66527b";
  //const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    (async () => {
      if (city) {
        try {
          const geoResponse = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
          );
          const geoData = await geoResponse.json();

          const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&units=metric&appid=${API_KEY}`
          );
          const weatherData = await weatherResponse.json();

          setWeatherInfo({
            city: weatherData.name,
            country: weatherData.sys.country,
            temp: Math.floor(weatherData.main.temp),
            icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
            description: weatherData.weather[0].description,
          });
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    })();
  }, [city]);

  return (
    <>
      {weatherInfo.temp !== null && (
        <h1>
          {weatherInfo.city}, {weatherInfo.country}
        </h1>
      )}

      {weatherInfo.temp !== null && <p>{weatherInfo.temp} Celsius</p>}

      {weatherInfo.icon !== null && <img src={weatherInfo.icon} alt="Icon" />}

      {weatherInfo.description !== null && <p>{weatherInfo.description}</p>}
    </>
  );
};

export default Weather;
