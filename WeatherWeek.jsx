function WeatherWeek({weatherMap, weatherVal, code}) {
  return (
    <>
      <div className="weather-week-container" >
        <p>{weatherVal.date}</p> {/*weather.daily.weathercode*/}
        <img className="image-week" src={weatherMap[weatherVal.code]} />
        <p>{weatherVal.max}°C  {weatherVal.min}°C </p> {/*weather.daily.temperature_2m_max    weather.daily.temperature_2m_min */}
      </div>
    </>
  );
}

export default WeatherWeek;
