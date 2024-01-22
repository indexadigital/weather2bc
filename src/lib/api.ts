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
        "current_weather": true,
        "daily": "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,windspeed_10m_max",
        "timezone": "auto"
    };

    return fetchAPI('https://api.open-meteo.com/v1/forecast', {
        params: params,
    })
};

export const getGeocoding = async (locationName: string) =>{
    return api.get("https://geocoding-api.open-meteo.com/v1/search", {
        params: {
            name: locationName,
        },
    })
}
  