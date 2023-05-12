import config from './config.json';

export default function DateTime() {
    const date = new Date();

    return (
        <section id='date-time'>
            <h2 className='sr-only'>Date</h2>
            <p id='date'>
                {date.toLocaleDateString(config.lang, config.dateOptions)}
            </p>
        </section>
    );
}
