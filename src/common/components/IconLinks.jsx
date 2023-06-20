import links from '../data/links';

export const IconLinks = () => {
    return (
        <ul className='flex flex-row flex-wrap justify-center list-none gap-x-4 gap-y-4 p-0 md:column-gap-0 md:justify-around md:p-0'>
            {links.map((link) => (
                <li key={link.title}>
                    <a
                        href={link.url}
                        target='_self'
                        rel='noopener noreferrer'
                        className={`block stroke-ctp-surface2 transition-fill duration-125 ease-in-out hover:stroke-${link.hoverColor} focus:stroke-${link.hoverColor} focus:outline-none`}>
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
                            {link.paths.map((path) => (
                                <path key={path} d={path} />
                            ))}
                        </svg>
                    </a>
                </li>
            ))}
        </ul>
    );
};
