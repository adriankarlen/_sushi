import bookmarks from './bookmarks.json';

export default function Bookmarks() {
    return (
        <>
            {bookmarks.map((category) => (
                <ul key={category.description}>
                    {category.bookmarks.map((bookmark) => (
                        <li key={bookmark.title}>
                            <a
                                href={bookmark.url}
                                target='_self'
                                rel='noopener noreferrer'>
                                <img
                                    src={bookmark.image}
                                    alt={`${bookmark.title} favicon`}
                                    className='favicon'
                                />
                                {bookmark.title}
                            </a>
                        </li>
                    ))}
                </ul>
            ))}
        </>
    );
}
