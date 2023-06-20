import { useEffect, useState } from 'react';

const ABSOLUTE_ZERO = -273.15;

export const Weather = () => {
    const [weather, setWeather] = useState({ location: '', details: {} });
    const [location, setLocation] = useState(null);

    if (navigator.geolocation && !location) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ lat: latitude, lng: longitude });
        });
    }

    useEffect(() => {
        const fetchWeather = async (lat, lng) => {
            const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
            const baseUrl = import.meta.env.VITE_OPEN_WEATHER_API_URL;

            const response = await fetch(
                `${baseUrl}?lat=${lat}&lon=${lng}&appid=${apiKey}`
            );
            const data = await response.json();

            const tempK = parseFloat(data.main.temp, 10);
            const tempC = Math.round(tempK - Math.abs(ABSOLUTE_ZERO));
            setWeather({
                location: data.name,
                details: {
                    title: `${tempC}°C`,
                    description: data.weather[0].description,
                    temperature: `${tempC}°C`,
                    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
                }
            });
        };

        if (location) {
            const { lat, lng } = location;
            fetchWeather(lat, lng);
        }
    }, [location]);

    return (
        <section className='flex flex-col justify-end'>
            <h4 className='sr-only'>Location &amp; Weather</h4>
            {weather.location && (
                <div className='grid grid-rows-2 grid-flow-col gap-x-1 items-center'>
                    <div className='font-bold text-right'>
                        {weather.location}
                    </div>
                    <p
                        title={weather.details.main}
                        className='flex items-center capitalize text-ctp-surface2'>
                        <img
                            src={weather.details.icon}
                            alt='weather-icon'
                            className='mr-1.5 w-6'
                        />
                        {weather.details.description}
                        <span className='mx-1'>|</span>
                        {weather.details.temperature}
                    </p>
                </div>
            )}
        </section>
    );
};
