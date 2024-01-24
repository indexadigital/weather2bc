"use client";

import Link from 'next/link';
import ForecastCard from './ForecastCard';
import { useEffect, useState } from 'react';

export default function ForecastList({ forecast, latitude, longitude } : { forecast: any, latitude: number, longitude: number } ) { 

    const [forecastState, setForecastState] = useState(forecast);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{    
            setTimeout(()=>{                

                if(!localStorage.getItem('reload')) 
                    window.location.reload();
                
                let forecastLocal = JSON.parse(localStorage.getItem('forecast') as any)

                setForecastState( ( forecastLocal != '0' && forecastLocal != null ) ? forecastLocal : forecast)
  
                if(latitude != 0 )
                    localStorage.setItem('latitude', latitude.toString())
                if(longitude != 0 )
                    localStorage.setItem('longitude', longitude.toString())
                
                if(forecast != 0 && forecast != null) {
                    localStorage.setItem('reload', '1');
                    localStorage.setItem('forecast', JSON.stringify(forecast))    
                } else {
                    localStorage.setItem('reload', '1');
                }
                    
                setLoading(false)           
            }, 1000)
    }, [forecastState])

    return (

        <>
        { forecastState && !loading ? (
            <div className="row">
                {forecastState?.daily?.time.map((time: any, index: number) => (  
                    <ForecastCard key={index} daily={forecastState.daily} day={time} index={index} />
                ))}
            </div>
        ) : (
            loading ? (
                <div className='w-50 mx-auto'>
                    <svg version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                        <circle fill="none" stroke="#fff" strokeWidth="4" strokeMiterlimit="10" cx="50" cy="50" r="48"/>
                        <line fill="none" strokeLinecap="round" stroke="#fff" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
                        <animateTransform 
                            attributeName="transform" 
                            dur="2s"
                            type="rotate"
                            from="0 50 50"
                            to="360 50 50"
                            repeatCount="indefinite" />
                        </line>
                        <line fill="none" strokeLinecap="round" stroke="#fff" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
                        <animateTransform 
                            attributeName="transform" 
                            dur="15s"
                            type="rotate"
                            from="0 50 50"
                            to="360 50 50"
                            repeatCount="indefinite" />
                        </line>
                    </svg>
                </div>
            ) : (
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4 text-white mb-5">
                        No weather forecast has been added.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link href="/add-forecast" title="Add Forecast" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">ADD FORECAST</Link>
                    </div>
                </div>                
            ) 
        )}
        </>
    )
}
