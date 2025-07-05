
function WeatherInfo({weatherValue, weatherState, data, itemIndex}){
    const formattedDayDate = new Date(weatherValue.current_weather.time).toLocaleDateString("tr-TR", {
      weekday: "long",
    });
    const selectedDay = data?.[itemIndex];
    console.log(selectedDay);
    return(
        <>
        {selectedDay ? (
            <div className="info-container">
            <h1>Hava Durumu</h1>
            {/*<h2>{selectedDay.}</h2>*/}
            <h2>{Math.floor(selectedDay.max)}°C</h2>
            <p style={{fontSize: 20}} >{selectedDay.date}</p>
        </div>
        ) : (
            <div className="info-container">
            <h1>Hava Durumu</h1>
            <h2>{weatherState[weatherValue.current_weather.weathercode]}</h2>
            <h2>{Math.floor(weatherValue.current_weather.temperature)}°C</h2>
            <p style={{fontSize: 20}} >{formattedDayDate}</p>
        </div>
        )

        }
        </>
    )
}

export default WeatherInfo;