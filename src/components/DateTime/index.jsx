import React, { useEffect, useState } from "react";
import config from "./config.json";


export default function DateTime() {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 30000); // Update clock every 30 seconds
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    return (
        <section id='date-time'>
            <h2 className='sr-only'>Date &amp; Time</h2>
            <p id='date'>{date.toLocaleDateString(config.lang, config.dateOptions)}</p>
            <p id='time'>{date.toLocaleTimeString(config.timeFormat, config.timeOptions)}</p>
        </section>
    );
}