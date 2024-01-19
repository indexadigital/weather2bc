import axios from 'axios';

const options = {
    timeout: 60000, 
    headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
    },
};
const api = axios.create(options);

async function fetchAPI(url : string, params : any){
    try {
        const response = await api.get(url, params);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
export const getForecast = async (latitude: number, longitude: number) => {
    const params = {
        "latitude": latitude,
        "longitude": longitude,
        "current": ["temperature_2m", "relative_humidity_2m", "apparent_temperature", "is_day", "precipitation", "weather_code"],
        "hourly": ["temperature_2m", "relative_humidity_2m", "apparent_temperature", "precipitation_probability", "weather_code"],
        "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min", "apparent_temperature_max", "apparent_temperature_min", "sunrise", "sunset"],
        "timezone": "America/Sao_Paulo"
    };

    return fetchAPI('https://api.open-meteo.com/v1/forecast', params)
};

export const getGeocoding = async (locationName: string) =>{
    return api.get("https://geocoding-api.open-meteo.com/v1/search", {
        params: {
            name: locationName,
        },
    })
}
  