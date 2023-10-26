import { useEffect, useState } from 'react';

const ABSOLUTE_ZERO = -273.15;

type Location = {
    lat: number;
    lng: number;
};

type Weather = {
    location: string;
    details: WeatherDetails;
};

type WeatherDetails = {
    main: string;
    description: string;
    temperature: string;
    icon: string;
};

export const WeatherWidget = () => {
    const [weather, setWeather] = useState({} as Weather);
    const [location, setLocation] = useState({} as Location);

    if (navigator.geolocation && !location.lat && !location.lng) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setLocation({ lat: latitude, lng: longitude });
        });
    }

    useEffect(() => {
        const fetchWeather = async (lat: number, lng: number) => {
            const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
            const baseUrl = import.meta.env.VITE_OPEN_WEATHER_API_URL;

            if (!apiKey || !baseUrl || !lng || !lat) {
                console.error(
                    'Environment variables for OpenWeather API are not set.'
                );
                return;
            }

            const response = await fetch(
                `${baseUrl}?lat=${lat}&lon=${lng}&appid=${apiKey}`
            );
            const data = await response.json();

            if (!data?.main) return;
            const tempK = parseFloat(data?.main.temp);
            const tempC = Math.round(tempK - Math.abs(ABSOLUTE_ZERO));
            setWeather({
                location: data.name,
                details: {
                    main: `${tempC}°C`,
                    description: data.weather[0].description,
                    temperature: `${tempC}°C`,
                    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
                }
            });
        };

        if (location) {
            const { lat, lng } = location;
            fetchWeather(
                lat ?? import.meta.env.VITE_OPEN_WEATHER_API_DEFAULT_LAT,
                lng ?? import.meta.env.VITE_OPEN_WEATHER_API_DEFAULT_LNG
            );
        }
    }, [location]);

    return (
        <section className='flex flex-col justify-end'>
            <h4 className='sr-only'>Location &amp; Weather</h4>
            {weather.location && (
                <div className='grid items-center grid-flow-col grid-rows-2 gap-x-1'>
                    <div className='font-bold text-right'>
                        {weather.location}
                    </div>
                    <p
                        title={weather.details.main}
                        className='flex items-center capitalize text-rp-highlightHigh'>
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
