import bookmarks from '../data/bookmarks.json';

export const Bookmarks = () => {
    return (
        <div
            id='bookmarks'
            className='flex flex-row items-start justify-around md:flex-row'>
            <h2 className='sr-only'>Bookmarks</h2>
            {bookmarks.map(category => (
                <ul
                    key={category.description}
                    className='flex flex-col justify-around w-full px-2 first-of-type:pr-2 first-of-type:pl-0 last-of-type:pr-0 last-of-type:pl-2'>
                    {category.bookmarks.map(bookmark => (
                        <li
                            key={bookmark.title}
                            className='flex flex-row items-center justify-center mb-4 leading-4 rounded-full bg-rp-overlay hover:bg-rp-highlightMed focus:bg-rp-highlightHigh'>
                            <a
                                href={bookmark.url}
                                target='_self'
                                rel='noopener noreferrer'
                                className='flex justify-center w-full p-2 font-medium no-underline outline-none text-rp-muted hover:text-rp-subtle focus:text-rp-text'>
                                {bookmark.title}
                            </a>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
};
