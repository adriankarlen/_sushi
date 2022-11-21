import React, { useEffect, useState } from "react";

export default function DateTime() {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    return (
        <section id='date-time'>
            <h2 className='sr-only'>Date &amp; Time</h2>
            <p id='date'>{date.toLocaleDateString()}</p>
            <p id='time'>{date.toLocaleTimeString()}</p>
        </section>
    );
}