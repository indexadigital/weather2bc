import { create } from 'zustand';

interface Coordinates {
  latitude: number | null;
  longitude: number | null;
  setLatitude: (latitude: number) => void;
  setLongitude: (longitude: number) => void;
}

export const useCoordinates = create<Coordinates>((set) => ({
  latitude: null,
  longitude: null,
  setLatitude: (latitude) => set({ latitude }),
  setLongitude: (longitude) => set({ longitude }),
}));
