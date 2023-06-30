import links from '../data/links.json';

export const IconLinks = () => {
    const colorMap = [
        'hover:stroke-ctp-red focus:stroke-ctp-red/25',
        'hover:stroke-ctp-peach focus:stroke-ctp-peach/25',
        'hover:stroke-ctp-yellow focus:stroke-ctp-yellow/25',
        'hover:stroke-ctp-green focus:stroke-ctp-green/25',
        'hover:stroke-ctp-blue focus:stroke-ctp-blue/25',
        'hover:stroke-ctp-mauve focus:stroke-ctp-mauve/25',
        'hover:stroke-ctp-text focus:stroke-ctp-text/25'
    ];

    return (
        <ul className='flex flex-row flex-wrap justify-center p-0 list-none gap-x-4 gap-y-4 md:column-gap-0 md:justify-around md:p-0'>
            {links.map((link, index) => (
                <li key={link.title}>
                    <a
                        href={link.url}
                        target='_self'
                        rel='noopener noreferrer'
                        className={`block stroke-ctp-surface2 transition-fill duration-125 ease-in-out ${colorMap[index]} focus:outline-none`}>
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
