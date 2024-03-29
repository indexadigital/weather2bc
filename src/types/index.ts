export interface ForecastStore {
    latitude: number;
    longitude: number;
    forecast: any | null;
    setLatitude: (latitude: number) => void;
    setLongitude: (longitude: number) => void;
    setForecast: (latitude: number, longitude: number) => any;
}

export interface DailyForecast {
    time: string[];
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    sunrise: string[];
    sunset: string[];
    precipitation_sum: number[];
    windspeed_10m_max: number[];
}