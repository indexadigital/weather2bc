"use client";
import { DailyForecast } from "@/types";
import WeatherIcon from "./WeatherIcon";

const Details = ({ daily, index } : { daily : DailyForecast, index: number } ) => {
    return (
        <>
            <p><strong>Temperature Max:</strong> {daily.temperature_2m_max[index]}°C</p>
            <p><strong>Temperature Min:</strong> {daily.temperature_2m_min[index]}°C</p>
            <p><strong>Apparent Temperature Max:</strong> {daily.apparent_temperature_max[index]}°C</p>
            <p><strong>Apparent Temperature Min:</strong> {daily.apparent_temperature_min[index]}°C</p>
            <p><strong>Sunrise:</strong> {daily.sunrise[index]}</p>
            <p><strong>Sunset:</strong> {daily.sunset[index]}</p>
            <p><strong>Precipitation:</strong> {daily.precipitation_sum[index]} mm</p>
            <p><strong>Max Wind Speed:</strong> {daily.windspeed_10m_max[index]} km/h</p>
        </>
    )

}
export default function ForecastCard({ daily, day, index } : { daily : DailyForecast, day: string, index: number } ) {
    return (
        
        (index === 0) ?
        (   <>
                <div className="col col-12 card-forecast text-white">
                    <WeatherIcon code={daily.weathercode[index]} alt='fogDay' size={150} />
                    <h3 className="pb-3">{day} (Today)</h3>
                    <Details daily={daily} index={index}/>
                </div>
                <div className="col col-12 text-white my-5">
                    <h2>Next Days</h2>
                </div>
            </>
        ):(
            <div className="col col-4 col-xs-6 col-sm-6 col-md-6 text-white mb-4">
                <div className="card-forecast">
                    <WeatherIcon code={daily.weathercode[index]} alt='fogDay' size={150} />
                    <h3 className="pb-3">{day}</h3>
                    <Details daily={daily} index={index}/>
                </div>
            </div>
        )
    )
}