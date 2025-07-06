import { useState } from "react";
import { motion } from "motion/react";

function WeatherWeek({ weatherMap, weatherVal, onPress, isCitySelected, weatherMapNight}) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <div
        onClick={onPress}
        //whileHover={{ scale: 1.1 }}
        //whileTap={{ scale: 0.95 }}
        //onHoverStart={() => console.log("hover started!")}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        style={{
          cursor: "pointer",
          opacity: isPressed ? 0.5 : 1,
          transition: "opacity 0.3s",
        }}
        className="weather-week-container"
      >
        <p>{weatherVal.date}</p> {/*weather.daily.weathercode*/}
        <img className="image-week" src={weatherMap[weatherVal.code]} />
        <p>
          {Math.floor(weatherVal.max)}° {Math.floor(weatherVal.min)}°
        </p>{" "}
        {/*weather.daily.temperature_2m_max    weather.daily.temperature_2m_min */}
      </div>
    </>
  );
}

export default WeatherWeek;
