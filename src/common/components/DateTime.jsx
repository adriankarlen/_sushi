import config from '../data/datetime';

export const DateTime = () => {
    const date = new Date();

    return (
        <section className='flex flex-1'>
            <h4 className='sr-only'>Date</h4>
            <h4 className='font-bold'>
                {date.toLocaleDateString(config.lang, config.dateOptions)}
            </h4>
        </section>
    );
};
