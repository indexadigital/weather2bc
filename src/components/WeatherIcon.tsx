import Image from 'next/image';

import cloudy from '@bybas/weather-icons/design/fill/animation-ready/cloudy.svg';
import clearDay from '@bybas/weather-icons/design/fill/animation-ready/clear-day.svg';
import clearNight from '@bybas/weather-icons/design/fill/animation-ready/clear-night.svg';
import fogDay from '@bybas/weather-icons/design/fill/animation-ready/fog-day.svg';
import partlyCloudyDay from '@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day.svg';
import partlyCloudyNight from '@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-night.svg';
import rain from '@bybas/weather-icons/design/fill/animation-ready/rain.svg';
import partlyCloudyDayRain from '@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day-rain.svg';
import partlyCloudyNightRain from '@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-night-rain.svg';
import partlyCloudyDaySnow from '@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-day-snow.svg';
import partlyCloudyNightSnow from '@bybas/weather-icons/design/fill/animation-ready/partly-cloudy-night-snow.svg';
import thunderstorms from '@bybas/weather-icons/design/fill/animation-ready/thunderstorms.svg';
import mist from '@bybas/weather-icons/design/fill/animation-ready/mist.svg';

interface CodeMapping {
  [key: string]: string;
}

const codeMapping: CodeMapping = {
  '01d': clearDay,
  '01n': clearNight,
  '02d': partlyCloudyDay,
  '02n': partlyCloudyNight,
  '03d': cloudy,
  '03n': cloudy,
  '04d': cloudy,
  '04n': cloudy,
  '09d': rain,
  '09n': rain,
  '10d': partlyCloudyDayRain,
  '10n': partlyCloudyNightRain,
  '11d': thunderstorms,
  '11n': thunderstorms,
  '13d': partlyCloudyDaySnow,
  '13n': partlyCloudyNightSnow,
  '50d': mist,
  '50n': mist,
  '06': fogDay
};

interface WeatherIconProps {
  code: string;
  alt: string;
  size: number;
}

export default function WeatherIcon({ code, alt, size=75 }: WeatherIconProps) {
    return(
        <Image src={codeMapping[code]} alt={alt} width={size} height={size}/>
    )    
}
