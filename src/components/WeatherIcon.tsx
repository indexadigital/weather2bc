import Image from 'next/image';

import cloudy from '@bybas/weather-icons/design/fill/animation-ready/cloudy.svg';
import clearDay from '@bybas/weather-icons/design/fill/animation-ready/clear-day.svg';
import fogDay from '@bybas/weather-icons/design/fill/animation-ready/fog-day.svg';
import partlyCloudyDay from '@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day.svg';
import drizzle from '@bybas/weather-icons/design/fill/animation-ready/drizzle.svg';
import rain from '@bybas/weather-icons/design/fill/animation-ready/rain.svg';
import partlyCloudyDayRain from '@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day-rain.svg';
import thunderstorms from '@bybas/weather-icons/design/fill/animation-ready/thunderstorms.svg';
import thunderstormsSnow from '@bybas/weather-icons/design/fill/animation-ready/thunderstorms.svg';

interface CodeMapping {
  [key: string]: string;
}

const codeMapping: CodeMapping = {
  0: clearDay,
  1: partlyCloudyDay,
  2: partlyCloudyDay,
  3: partlyCloudyDay,
  6: fogDay,
  45: cloudy,
  48: cloudy,
  51: drizzle,
  53: drizzle,
  55: drizzle,
  56: drizzle,
  57: drizzle,
  61: rain,
  63: rain,
  65: rain,
  66: rain,
  67: rain,
  80: partlyCloudyDayRain,
  81: partlyCloudyDayRain,
  82: partlyCloudyDayRain,
  95: thunderstorms,
  96: thunderstorms,
  99: thunderstormsSnow  
};

interface WeatherIconProps {
  code: number;
  alt: string;
  size: number;
}

export default function WeatherIcon({ code, alt, size=75 }: WeatherIconProps) {
    return(
        <Image src={codeMapping[code]} alt={alt} width={size} height={size}/>
    )    
}
