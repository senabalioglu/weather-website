import { motion } from "motion/react";

function WeatherInfo({weatherValue, weatherState, data, itemIndex, cityTrigger}){
    const formattedDayDate = new Date(weatherValue.current_weather.time).toLocaleDateString("tr-TR", {
      weekday: "long",
    });
    const selectedDay = data?.[itemIndex];
    console.log(selectedDay);
    return(
        <>
        {selectedDay ? (
            <motion.div 
            key={`weather-${itemIndex}-${cityTrigger}-${selectedDay}`} //`weather-${itemIndex}-${weatherValue.timezone}`
            initial={{ scale: 0 }} animate={{ scale: 1 }} 
            className="info-container">
            <h1>Hava Durumu</h1>
            {/*<h2>{selectedDay.}</h2>*/}
            <h2>{Math.floor(selectedDay.max)}°C</h2>
            <p style={{fontSize: 20}} >{selectedDay.date}</p>
        </motion.div>
        ) : (
            <motion.div 
            key={`weather-${itemIndex}-${cityTrigger}-${selectedDay}`}
            initial={{ scale: 0 }} animate={{ scale: 1 }} 
            className="info-container">
            <h1>Hava Durumu</h1>
            <h2>{weatherState[weatherValue.current_weather.weathercode]}</h2>
            <h2>{Math.floor(weatherValue.current_weather.temperature)}°C</h2>
            <p style={{fontSize: 20}} >{formattedDayDate}</p>
        </motion.div>
        )

        }
        </>
    )
}

export default WeatherInfo;