import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Forecasts - Weather2bc',
}

export default function Forecasts() {
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center content">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white mb-5">Forecasts</h1>
        <div className="col-lg-6 mx-auto">
          List
        </div>
      </div>
    </div>
  )
}
