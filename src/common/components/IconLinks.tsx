import links from '../data/links.json';

export const IconLinks = () => {
    const colorMap = [
        'hover:stroke-rp-love focus:stroke-rp-love/25',
        'hover:stroke-rp-gold focus:stroke-rp-gold/25',
        'hover:stroke-rp-rose focus:stroke-rp-rose/25',
        'hover:stroke-rp-pine focus:stroke-rp-pine/25',
        'hover:stroke-rp-foam focus:stroke-rp-foam/25',
        'hover:stroke-rp-iris focus:stroke-rp-iris/25',
        'hover:stroke-rp-text focus:stroke-rp-text/25'
    ];

    return (
        <ul className='flex flex-row flex-wrap justify-center p-0 list-none gap-x-4 gap-y-4 md:column-gap-0 md:justify-around md:p-0'>
            {links.map((link, index) => (
                <li key={link.title}>
                    <a
                        href={link.url}
                        target='_self'
                        rel='noopener noreferrer'
                        className={`block stroke-rp-highlightHigh transition-fill duration-125 ease-in-out ${colorMap[index]} focus:outline-none`}>
                        <svg
                            className='h-6'
                            role='img'
                            viewBox='0 0 24 24'
                            width={24}
                            height={24}
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            preserveAspectRatio='xMidYMid meet'>
                            <title>{link.title}</title>
                            {link.paths.map(path => (
                                <path key={path} d={path} />
                            ))}
                        </svg>
                    </a>
                </li>
            ))}
        </ul>
    );
};
