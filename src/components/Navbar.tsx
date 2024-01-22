"use client";
import Link from "next/link";
import WeatherIcon from '@/components/WeatherIcon'
import { usePathname } from 'next/navigation'

export default function Navbar(){

    const pathname = usePathname()
    const menu = [
        { name: 'Home', page: '/'},
        { name: 'Forecasts', page: '/forecasts'},
        { name: 'Add Forecast', page: '/add-forecast'},
    ];

    return (
        <header className="text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap justify-content-center align-items-center py-3">
                    <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none text-white">
                        <WeatherIcon code={6} alt='fogDay' size={75} />
                        <span className="fs-4 px-2 pt-3">Weather Forecast - React.js</span>
                    </Link>
                    <ul className="nav nav-pills m-0 pt-3">
                        { menu.map((item, index) => (
                            <li key={index} className="nav-item">
                                <Link 
                                    href={ item.page } 
                                    className={`nav-link text-white ${ pathname === item.page ? 'active' : '' }`} 
                                    title={ item.name }
                                >
                                    { item.name }
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )

}