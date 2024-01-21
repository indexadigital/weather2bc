"use client";
import { useEffect } from "react"

export default function FormCoordinates({ forecastForm, latitude, longitude } : any ){

    useEffect(()=>{
        setTimeout(()=>{
            const inputs = document.querySelectorAll<HTMLInputElement>('input[type="number"]');            
            inputs.forEach((input) => {
                input.defaultValue = input.defaultValue.replace(/,/g, '.');
                console.log("defaultValue", input.defaultValue);
                console.log("value", input.value);
            });
        }, 1000)   
    }, [])

    return (
        <form action={forecastForm}>
            <div className="form-floating mb-4">
            <input 
                type="number"
                className="form-control"
                placeholder="Latitude" 
                min="-90" 
                max="90" 
                step="0.0001" 
                id="latitude" 
                name="latitude" 
                title="Send valid latitude"
                defaultValue={latitude}
                required 
            />
            <label htmlFor="latitude">Latitude</label>
            </div>
            <div className="form-floating mb-4">
            <input 
                type="number"
                className="form-control" 
                placeholder="Longitude" 
                min="-180" 
                max="180" 
                step="0.0001" 
                id="longitude" 
                name="longitude"                  
                title="Send valid longitude"
                defaultValue={longitude}
                required
            />
            <label htmlFor="longitude">Longitude</label>
            </div>
            <button 
            type="submit" 
            className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold w-100">
                Add
            </button>
        </form>
    )
}