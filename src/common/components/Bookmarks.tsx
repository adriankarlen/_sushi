import bookmarks from '../data/bookmarks.json';

export const Bookmarks = () => {
    const rounded = (index: number, length: number) => {
        if (index === 0)
            return 'first-of-type:rounded-tl-2xl last-of-type:rounded-bl-2xl';
        if (index === length - 1)
            return 'first-of-type:rounded-tr-2xl last-of-type:rounded-br-2xl';
        return '';
    };

    return (
        <div
            id='bookmarks'
            className='flex flex-row items-start justify-around md:flex-row'>
            <h2 className='sr-only'>Bookmarks</h2>
            {bookmarks.map((category, index) => (
                <ul
                    key={category.description}
                    className='flex flex-col justify-around w-full pr-1 last-of-type:pr-0'>
                    {category.bookmarks.map(bookmark => (
                        <li
                            key={bookmark.title}
                            className={`flex flex-row items-center justify-center mb-1 leading-4 border-2 border-rp-overlay rounded-sm bg-rp-surface hover:bg-rp-overlay focus:bg-rp-highlightMed ${rounded(
                                index,
                                bookmarks.length
                            )}`}>
                            <a
                                href={bookmark.url}
                                target='_self'
                                rel='noopener noreferrer'
                                className='flex justify-center w-full p-2 font-medium no-underline outline-none text-rp-muted hover:text-rp-rose focus:text-rp-love'>
                                {bookmark.title}
                            </a>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
};
