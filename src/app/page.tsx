import styles from './page.module.css'

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Weather2bc',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>INDEX</h1>
      </div>
    </main>
  )
}
