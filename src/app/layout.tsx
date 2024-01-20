import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import GeolocationNavigator from '@/components/GeolocationNavigator';

const font = Montserrat({ 
  weight: "500",
  preload: false
})

export const metadata: Metadata = {
  title: 'Weather2bc',
  description: 'A React.js application for integrating with the open-meteo.com API to display weather information.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <GeolocationNavigator />
        {children}
      </body>
    </html>
  )
}
