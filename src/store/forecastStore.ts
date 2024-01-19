import { ForecastStore } from '@/types';
import { getForecast } from '@/lib/api';
import { create } from 'zustand';

import { LocalStorage } from "node-localstorage";
global.localStorage = new LocalStorage('./scratch');

export const useForecastStore = create<ForecastStore>((set) => ({
  latitude: localStorage.getItem('latitude') ? parseFloat(localStorage.getItem('latitude') as string) : null,
  longitude: localStorage.getItem('longitude') ? parseFloat(localStorage.getItem('longitude') as string) : null,
  forecast: localStorage.getItem('forecast') ? JSON.parse(localStorage.getItem('forecast') as any) : null,
  setLatitude: (latitude) => {
    localStorage.setItem('latitude', latitude.toString());
    set({ latitude })
  },
  setLongitude: (longitude) => {
    localStorage.setItem('longitude', longitude.toString());
    set({ longitude })
  },
  setForecast:  async (latitude, longitude) => {
    const forecastData = await getForecast(latitude, longitude);
    localStorage.setItem('forecast', JSON.stringify(forecastData));
    set({ forecast: forecastData });
  }
}));
