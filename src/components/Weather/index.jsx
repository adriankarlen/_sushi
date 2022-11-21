import React, { useEffect, useState } from 'react';

export default function Weather() {
    const [weather, setWeather] = useState({});

    const fetchWeather = async () => {
        const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
        const baseUrl = process.env.REACT_APP_OPEN_WEATHER_API_URL;
        const cityId = process.env.REACT_APP_OPEN_WEATHER_CITY_ID;

        fetch(`${baseUrl}?id=${cityId}&appid=${apiKey}`)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                let tempK = parseFloat(data.main.temp);
                let tempC = Math.round(tempK - 273.15);
                setWeather({
                    location: data.name,
                    details: {
                        title: `${tempC}°C`,
                        description: data.weather[0].description,
                        temperature: `${tempC}°C`,
                        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
                    }
                });
            });
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    return (
        <section id='weather'>
            <h2 className='sr-only'>Location &amp; Weather</h2>
            {weather.location && (
                <>
                    <p id='location'>{weather.location}</p>
                    <p id='details' title={weather.details.title}>
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
