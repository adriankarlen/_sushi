import config from './config.json';

export const DateTime = () => {
    const date = new Date();

    return (
        <section id='date-time'>
            <h4 className='sr-only'>Date</h4>
            <h4 id='date'>
                {date.toLocaleDateString(config.lang, config.dateOptions)}
            </h4>
        </section>
    );
};
