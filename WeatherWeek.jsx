import weatherIcons from "./src/assets/weatherIcons";

function WeatherWeek() {
  return (
    <>
      <div className="weather-week-container" >
        <p>Perşembe</p>
        <img className="image-week" src={weatherIcons.clearday} />
        <p>29° 18°</p>
      </div>
    </>
  );
}

export default WeatherWeek;
