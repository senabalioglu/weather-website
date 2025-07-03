
function WeatherInfo({weatherValue}){
    const formattedDayDate = new Date(weatherValue.current_weather.time).toLocaleDateString("tr-TR", {
      weekday: "long",
    });
    return(
        <>
        <div className="info-container" >
            <h1>Hava Durumu</h1>
            <h2>{weatherValue.current_weather.temperature}°C</h2>
            <h3>{formattedDayDate}</h3>
        </div>
        </>
    )
}

export default WeatherInfo;