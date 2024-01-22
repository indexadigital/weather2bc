"use client";
import { useEffect } from 'react';

export default function GeolocationNavigator(){

    useEffect(() => {
        if( !localStorage.getItem('latitude') && !localStorage.getItem('longitude') ) {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;    
                        localStorage.setItem('latitude', latitude.toString());
                        localStorage.setItem('longitude', longitude.toString());
                        window.location.href = `/add-forecast?latitude=${latitude}&longitude=${longitude}`;
                    },
                    (error) => {
                        console.error('Geolocation error:', error.message);
                    }
                );
            }    
        }
    }, []);

    return (
        <></>
    );
}