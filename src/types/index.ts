export interface ForecastStore {
    latitude: number | null;
    longitude: number | null;
    forecast: any | null;
    setLatitude: (latitude: number) => void;
    setLongitude: (longitude: number) => void;
    setForecast: (latitude: number, longitude: number) => void;
}