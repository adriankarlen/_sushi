import links from './links.json';

export default function IconLinks() {
    return (
        <ul>
            {links.map((link, index) => (
                <li>
                    <a
                        href={link.url}
                        key={index}
                        target='_self'
                        rel='noopener noreferrer'
                    >
                        <svg
                            role='img'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                            preserveAspectRatio='xMidYMid meet'
                        >
                            {link.transform.use ? (
                                <g transform={link.transform.value}>
                                    <title>{link.title}</title>
                                    <path d={link.path} />
                                </g>
                            ) : (
                                <>
                                    <title>{link.title}</title>
                                    <path d={link.path} />
                                </>
                            )}
                        </svg>
                    </a>
                </li>
            ))}
        </ul>
    );
}
