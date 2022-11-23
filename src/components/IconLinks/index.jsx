import links from './links.json';

export default function IconLinks() {
    return (
        <ul>
            {links.map((link) => (
                <li key={link.id}>
                    <a
                        href={link.url}
                        target='_self'
                        rel='noopener noreferrer'
                    >
                        <svg
                            role='img'
                            viewBox={link.viewBox}
                            xmlns='http://www.w3.org/2000/svg'
                            preserveAspectRatio='xMidYMid meet'
                        >
                            <title>{link.title}</title>
                            {link.paths.map((path) => (
                                <path d={path}/>
                            ))}
                            <path d={link.path} />
                        </svg>
                    </a>
                </li>
            ))}
        </ul>
    );
}
