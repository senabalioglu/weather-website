import React, { useEffect, useState } from "react";
import weatherIcons from "./src/assets/weatherIcons";
import WeatherInfo from "./WeatherInfo";
import WeatherWeek from "./WeatherWeek";
import WeatherDay from "./WeatherDay";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  const weatherCodeMap = {
    0: weatherIcons.clearday,
    1: weatherIcons.partlycloudyday,
    2: weatherIcons.cloudy,
    3: weatherIcons.showers,
    45: weatherIcons.fog,
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=41.0138&longitude=28.9497&current_weather=true&hourly=temperature_2m,weathercode,precipitation,relative_humidity_2m,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&timezone=auto`
        );
        const data = await res.json();

        setWeather(data);
      } catch (error) {
        console.error("İstek hatası:", error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) return <p>Yükleniyor...</p>;

  return (
    <>
      <div className="outline-container">
        <div className="inner-container">
          <WeatherDay weatherMap={weatherCodeMap} weatherVal={weather} />
          <WeatherInfo weatherValue={weather} />
        </div>
        <div className="week-container" >
          <WeatherWeek />
          <WeatherWeek />
          <WeatherWeek />
          <WeatherWeek />
          <WeatherWeek />
          <WeatherWeek />
          <WeatherWeek />
        </div>
      </div>
    </>
  );
};

export default Weather;

/*
<div className="outline-container">
        <div className="weather-container">
          <div className="icon-container">
            <img src={weatherCodeMap[weather.current_weather.weathercode]} />
            <p>Bölge: {weather.timezone}</p>
          </div>
          <WeatherInfo weatherValue={weather} />
          <WeatherWeek />
        </div>
      </div>
*/
