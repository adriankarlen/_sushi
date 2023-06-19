import { useEffect, useState } from 'react';

const ABSOLUTE_ZERO = -273.15;

export default function Weather() {
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
            console.log('fetchWeather');
            const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
            const baseUrl = process.env.REACT_APP_OPEN_WEATHER_API_URL;

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
        <section id='weather'>
            <h4 className='sr-only'>Location &amp; Weather</h4>
            {weather.location && (
                <>
                    <h4 id='location'>{weather.location}</h4>
                    <p id='details' title={weather.details.main}>
                        <img src={weather.details.icon} alt='weather-icon' />
                        {weather.details.description}
                        <span className='separator'>|</span>
                        {weather.details.temperature}
                    </p>
                </>
            )}
        </section>
    );
}
