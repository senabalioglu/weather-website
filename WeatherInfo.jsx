
function WeatherInfo({weatherValue}){
    return(
        <>
        <div className="info-container" >
            <h1>Hava Durumu</h1>
            <h2>{weatherValue.current_weather.temperature}°C</h2>
            <h3>{weatherValue.current_weather.time}</h3>
        </div>
        </>
    )
}

export default WeatherInfo;