function WeatherDay({weatherMap, weatherVal}) {
    
  return (
    <>
      <div className="day-container" >
        <img src={weatherMap[weatherVal.current_weather.weathercode]} />
        <h3>{weatherVal.timezone}</h3>
      </div>
    </>
  );
}

export default WeatherDay;
