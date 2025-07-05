import { useEffect, useState } from "react";
import { motion } from "motion/react";
import cities from "./src/assets/cities";

function WeatherDay({ weatherMap, weatherVal, data, itemIndex, onCityChange }) {

  const [selectedCity, setSelectedCity] = useState("");

  const selectedDay = data?.[itemIndex];
  const isDay = weatherVal.is_day;

    function handleChange(event){
      const city = event.target.value;
      setSelectedCity(city);
      onCityChange(city);
    }
  return (
    <>
      {selectedDay ? (
        <motion.div 
        key={`weather-${itemIndex}-${selectedCity}-${selectedDay}`} //`weather-${itemIndex}-${weatherValue.timezone}` selectedDay || selectedCity || itemIndex
        initial={{ scale: 0 }} animate={{ scale: 1 }} 
        className="day-container"
        >
          <img src={weatherMap[selectedDay.code]} />
          <h3>{weatherVal.timezone}</h3>
        </motion.div>
      ) : (
        <motion.div 
        key={`weather-${itemIndex}-${selectedCity}-${selectedDay}`}
        initial={{ scale: 0 }} animate={{ scale: 1 }} 
        className="day-container">
          <img src={weatherMap[weatherVal.current_weather.weathercode]} />
          <select value={selectedCity} onChange={handleChange} >
            {
              cities.map((c, index) => <option key={index} >{c.name}</option>)
            }
          </select>
          <h3>{weatherVal.timezone}</h3> {/*weatherVal.timezone*/}
        </motion.div>
      )}
    </>
  );
}

export default WeatherDay;
