import { useEffect, useState } from "react";

function WeatherDay({ weatherMap, weatherVal, data, itemIndex, onCityChange }) {

  const [selectedCity, setSelectedCity] = useState("");

  const selectedDay = data?.[itemIndex];

  const cities = [ //setCity {cities.kullanıcıdan alınan değer}
      { name: "Istanbul", lat: 41.0082, lon: 28.9784 },
      { name: "Ankara", lat: 39.9208, lon: 32.8541 },
      { name: "Izmir", lat: 38.4192, lon: 27.1287 },
      { name: "Bursa", lat: 40.1828, lon: 29.0663 },
      { name: "Adana", lat: 37.0, lon: 35.3213 },
      { name: "Antalya", lat: 36.8969, lon: 30.7133 },
      { name: "Konya", lat: 37.8714, lon: 32.4846 },
      { name: "Gaziantep", lat: 37.0662, lon: 37.3833 },
      { name: "Diyarbakir", lat: 37.9144, lon: 40.2306 },
      { name: "Trabzon", lat: 41.0015, lon: 39.7178 },
    ];

    function handleChange(event){
      const city = event.target.value;
      setSelectedCity(city);
      onCityChange(city);
    }
  return (
    <>
      {selectedDay ? (
        <div className="day-container">
          <img src={weatherMap[selectedDay.code]} />
          <h3>{weatherVal.timezone}</h3>
        </div>
      ) : (
        <div className="day-container">
          <img src={weatherMap[weatherVal.current_weather.weathercode]} />
          <select value={selectedCity} onChange={handleChange} >
            {
              cities.map((c, index) => <option key={index} >{c.name}</option>)
            }
          </select>
          <h3>{weatherVal.timezone}</h3> {/*weatherVal.timezone*/}
        </div>
      )}
    </>
  );
}

export default WeatherDay;
