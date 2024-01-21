import { forecastForm } from '@/actions'
import FormCoordinates from '@/components/FormCoordinates';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Add Forecast - Weather2bc',
}

export default function AddForecast({
  searchParams
} : { searchParams: { latitude: string, longitude: string } } ) {

  let latitude, longitude = '';
  if (searchParams.latitude)
    latitude = parseFloat(searchParams.latitude as string).toFixed(4)
  if (searchParams.longitude)
    longitude = parseFloat(searchParams.longitude as string).toFixed(4)

  return (
      <div className="bg-dark text-secondary px-4 py-5 text-center content">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white mb-5">Add Forecast</h1>
          <div className="col-lg-6 mx-auto">
            <FormCoordinates 
              forecastForm={forecastForm} 
              latitude={latitude} 
              longitude={longitude} 
            />
          </div>
        </div>
      </div>
  )

}