"use server";

import z from 'zod';
import { useForecastStore } from '@/store/forecastStore';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const schema = z.object({
    latitude: z.number(),
    longitude: z.number()
});

export async function forecastForm(formData: FormData){

    const { setLatitude, setLongitude, setForecast } = useForecastStore.getState();
    const parsed = schema.parse({
        latitude: parseFloat(formData.get("latitude") as string),
        longitude: parseFloat(formData.get("longitude") as string),
    });

    setLatitude(parsed.latitude);
    setLongitude(parsed.longitude);
    if(setForecast(parsed.latitude, parsed.longitude)){
        revalidatePath('/forecasts');
        redirect('/forecasts');
    }    
};