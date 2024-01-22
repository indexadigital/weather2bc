import ForecastCard from '@/components/ForecastCard';
import { useForecastStore } from '@/store/forecastStore';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Forecasts - Weather2bc',
}

export default function Forecasts() {

  const { forecast, latitude, longitude, setForecast } = useForecastStore.getState();

  const handlerReload = () => {
    if (latitude && longitude)
      setForecast(latitude, longitude);
  }

  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center content content-auto">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white mb-5">Forecasts</h1>
        <div className="row">
          {forecast.daily.time.map((time: any, index: number) => (  
            <ForecastCard key={index} daily={forecast.daily} day={time} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
