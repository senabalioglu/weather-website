
function WeatherInfo({weatherValue}){
    return(
        <>
        <div className="icon-container" >
            <h2>Hava Durumu</h2>
            <p>{weatherValue.current_weather.temperature}°C</p>
            <p>{weatherValue.current_weather.time}</p>
        </div>
        </>
    )
}

export default WeatherInfo;