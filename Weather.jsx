import React, { useEffect, useState } from "react";
import weatherIcons from "./src/assets/weatherIcons";
import WeatherInfo from "./WeatherInfo";
import WeatherWeek from "./WeatherWeek";
import WeatherDay from "./WeatherDay";
import { motion } from "motion/react";
import weatherCodeMap from "./src/assets/weatherCodeMap";
import weatherCodeMapNight from "./src/assets/weatherCodeMapNight";
import weatherCodeStateMap from "./src/assets/weatherCodeStateMap";
import weatherBackgroundMap from "./src/assets/weatherBackgroundMap";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [ind, setInd] = useState();
  const [selectedCity, setSelectedCity] = useState("Istanbul");
  const [formattedZone, setFormattedZone] = useState({
    latitude: "41.0082",
    longitude: "28.9784",
  });
  const [weatherCode, setWeatherCode] = useState(0);

  useEffect(() => {
    if (!formattedZone) return;
    if (selectedCity) {
      setFormattedZone({
        latitude: zoneMap[selectedCity][0],
        longitude: zoneMap[selectedCity][1],
      });
    } else {
      setFormattedZone(null);
    }
  }, [selectedCity]);

  const zoneMap = {
    //zoneMap.selectedCity.map... (gibi)
    Istanbul: ["41.0082", "28.9784"],
    Ankara: ["39.9208", "32.8541"],
    Izmir: ["38.4192", "27.1287"],
    Bursa: ["40.1828", "29.0663"],
    Adana: ["37.0", "35.3213"],
    Antalya: ["36.8969", "30.7133"],
    Konya: ["37.8714", "32.4846"],
    Gaziantep: ["37.0662", "37.3833"],
    Diyarbakir: ["37.9144", "40.2306"],
    Trabzon: ["41.0015", "39.7178"],
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  useEffect(() => {
    if (!formattedZone) return;
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${formattedZone.latitude}&longitude=${formattedZone.longitude}&current_weather=true&hourly=temperature_2m,weathercode,precipitation,relative_humidity_2m,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&timezone=auto`
        );
        const data = await res.json();

        setWeather(data);
        if (data?.daily?.weathercode?.[0] != null) {
          setWeatherCode(data.daily.weathercode[0]);
          console.log(weatherCode)
        }
      } catch (error) {
        console.error("İstek hatası:", error);
      }
      const newClass = weatherBackgroundMap[weatherCode] || "weather-default";

      Object.values(weatherBackgroundMap).forEach((cls) =>
        document.body.classList.remove(cls)
      );
      document.body.classList.add(newClass);
    };

    fetchWeather();
  }, [formattedZone, weatherCode]);

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
            onCityChange={handleCityChange}
            itemIndex={ind}
            data={formattedDay}
            weatherMap={weatherCodeMap}
            weatherMapNight = {weatherCodeMapNight}
            weatherVal={weather}
          />
          <WeatherInfo
            cityTrigger={selectedCity}
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
