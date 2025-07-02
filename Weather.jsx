import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=99b272c9728c4e40863163705250207&q=Istanbul&aqi=no`
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
      <h2>{weather.current.condition.text} Hava Durumu</h2>
      <p>Sıcaklık: {weather.current.temp_c}°C</p>
      <p>Tarih: {weather.location.localtime}</p>
    </div>
  );
};

export default Weather;
