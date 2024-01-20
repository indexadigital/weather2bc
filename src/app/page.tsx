import Link from 'next/link'
import { Metadata } from 'next'
import WeatherIcon from '@/components/WeatherIcon'
 
export const metadata: Metadata = {
  title: 'Weather2bc',
}

export default function Home() {
  return (
    <main>
      <div className="bg-dark text-secondary px-4 py-5 text-center content">
        <div className="py-5">
          <WeatherIcon code='06' alt='fogDay' size={150} />
          <h1 className="display-5 fw-bold text-white mb-4">              
              Weather Forecast - React.js
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4 text-white mb-5">
              A React.js application developed with the Next.js framework version 14, using Zustand to manage the global state, and integrating with API <Link href="https://open-meteo.com/en/docs" target='_blank' title='API Open Meteo' className='text-info'>open-meteo.com</Link> to display weather information.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link href="/add-forecast" title="Add Forecast" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">ADD FORECAST</Link>
              <Link href="/forecasts" title="Forecasts" className="btn btn-outline-light btn-lg px-4">FORECASTS</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
