import React, { useEffect, useState } from "react";
import weatherIcons from "./src/assets/weatherIcons";
import WeatherInfo from "./WeatherInfo";
import WeatherWeek from "./WeatherWeek";
import WeatherDay from "./WeatherDay";
import { motion } from "motion/react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  //const [dayData, setDayData] = useState(null);
  const [ind, setInd] = useState();

  const weatherCodeMap = {
    0: weatherIcons.clearday,
    1: weatherIcons.partlycloudyday,
    2: weatherIcons.cloudy,
    3: weatherIcons.showers,
    45: weatherIcons.fog,
  };

  const weatherCodeStateMap = {
    0: "Açık",
    1: "Parçalı Bulutlu",
    2: "Bulutlu",
    3: "Sağanak Yağış",
    45: "Sisli",
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

  const formattedDay = weather.daily.time.map((d, index) => ({
    date: new Date(d).toLocaleDateString("tr-TR", {
      weekday: "long",
    }),
    code: weather.daily.weathercode[index],
    max: weather.daily.temperature_2m_max[index],
    min: weather.daily.temperature_2m_min[index],
  }));

  const handlePress = (index) => {
    setInd(index);
  };

  return (
    <>
      <div className="outline-container">
        <div className="inner-container">
          <WeatherDay
            itemIndex={ind}
            data={formattedDay}
            weatherMap={weatherCodeMap}
            weatherVal={weather}
          />
          <WeatherInfo
            itemIndex={ind}
            data={formattedDay}
            weatherState={weatherCodeStateMap}
            weatherValue={weather}
          />
        </div>
        <div className="week-container">
          {formattedDay.map((day, index) => (
            <div key={index}>
              <WeatherWeek
                onPress={() => handlePress(index)}
                weatherMap={weatherCodeMap}
                weatherVal={day}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Weather;
