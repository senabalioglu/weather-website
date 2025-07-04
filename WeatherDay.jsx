import { useEffect } from "react";

function WeatherDay({ weatherMap, weatherVal, data, itemIndex }) {
  const selectedDay = data?.[itemIndex];

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
          <h3>{weatherVal.timezone}</h3>
        </div>
      )}
    </>
  );
}

export default WeatherDay;
