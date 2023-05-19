import links from './links.json';

export default function IconLinks() {
    return (
        <ul>
            {links.map((link) => (
                <li key={link.title}>
                    <a href={link.url} target='_self' rel='noopener noreferrer'>
                        <svg
                            role='img'
                            viewBox='0 0 24 24'
                            width={24}
                            height={24}
                            stroke-width={2}
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            preserveAspectRatio='xMidYMid meet'>
                            <title>{link.title}</title>
                            {link.paths.map((path, index) => (
                                <path key={link.title + index} d={path} />
                            ))}
                        </svg>
                    </a>
                </li>
            ))}
        </ul>
    );
}
