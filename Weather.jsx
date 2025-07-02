import React, { useEffect, useState } from "react";
import resimDen from './src/assets/awatar.png'

const Weather = () => {
  const [weather, setWeather] = useState(null);

  const weatherCodeMap = {
    0: "Açık Gökyüzü",
    1: "Kısmen Bulutlu",
    2: "Bulutlu",
    3: "Hafif Yağmur",
    45: "Sis",
    48: "Donan Sis",
    51: "Çiseleme",
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=41.0138&longitude=28.9497&current_weather=true&daily=weathercode&timezone=auto`
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
    <div>
      <h2>{weatherCodeMap[weather.current_weather.weathercode]} Hava Durumu</h2>
      <img src={resimDen} alt="resim" />
      <p>Sıcaklık: {weather.current_weather.temperature}°C</p>
      <p>Bölge: {weather.timezone}</p>
    </div>
  );
};

export default Weather;
