import styles from '../page.module.css'

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Forecasts - Weather2bc',
}

export default function Forecasts() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>FORECASTS</h1>
      </div>
    </main>
  )
}
