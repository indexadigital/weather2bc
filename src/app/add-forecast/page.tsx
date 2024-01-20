import { forecastForm } from '@/actions'
import { Metadata } from 'next'
import { ChangeEvent, useRef } from 'react';
 
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

  console.log(latitude, longitude);

  return (
      <div className="bg-dark text-secondary px-4 py-5 text-center content">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white mb-5">Add Forecast</h1>
          <div className="col-lg-6 mx-auto">
            <form action={forecastForm}>
              <div className="form-floating mb-4">
                <input 
                  type="number" 
                  className="form-control"
                  placeholder="Latitude" 
                  min="-90" 
                  max="90" 
                  step="0.000001" 
                  id="latitude" 
                  name="latitude" 
                  title="Send valid latitude"
                  defaultValue={latitude}
                  required 
                />
                <label htmlFor="latitude">Latitude</label>
              </div>
              <div className="form-floating mb-4">
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="Longitude" 
                  min="-180" 
                  max="180" 
                  step="0.000001" 
                  id="longitude" 
                  name="longitude"                  
                  title="Send valid longitude"
                  defaultValue={longitude}
                  required
                />
                <label htmlFor="longitude">Longitude</label>
              </div>
              <button 
                type="submit" 
                className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold w-100">
                  Add
              </button>
            </form>
          </div>
        </div>
      </div>
  )

}