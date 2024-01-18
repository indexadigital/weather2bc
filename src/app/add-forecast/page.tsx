import { useCoordinates } from '@/store/coordinates';
import styles from '../page.module.css'

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Add Forecast - Weather2bc',
}

export default function AddForecast() {

  const { setLatitude, setLongitude } = useCoordinates();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const latitude = parseFloat(event.currentTarget.latitude.value);
    const longitude = parseFloat(event.currentTarget.longitude.value);
    setLatitude(latitude);
    setLongitude(longitude);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <h1>ADD FORECAST</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="latitude">Latitude:</label>
            <input type="number" id="latitude" name="latitude" required />
            <label htmlFor="longitude">Longitude:</label>
            <input type="number" id="longitude" name="longitude" required />
            <button type="submit">Add</button>
          </form>
      </div>
    </main>
  )
}
