import { useState, useEffect } from 'react';
import config from './config.json';

export default function Clock() {
    const [time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 30000); // Update clock every 30 seconds
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    return (
        <section id='clock'>
            <h2 className='sr-only'>Clock</h2>
            <span id='time'>
                {time.toLocaleTimeString(config.timeFormat, config.timeOptions)}
            </span>
        </section>
    );
}
