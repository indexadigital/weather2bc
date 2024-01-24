import { ForecastStore } from '@/types';
import { getForecast } from '@/lib/api';
import { create } from 'zustand';

export const useForecastStore = create<ForecastStore>((set) => ({
  latitude: 0,
  longitude: 0,
  forecast: 0,
  setLatitude: (latitude) => {
    set({ latitude })
  },
  setLongitude: (longitude) => {
    set({ longitude })
  },
  setForecast:  async (latitude, longitude) => {
    const forecastData = await getForecast(latitude, longitude);
    if(forecastData) {
      set({ forecast: forecastData });
    }
    return forecastData
  }
}));
