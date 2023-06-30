import bookmarks from '../data/bookmarks.json';

export const Bookmarks = () => {
    return (
        <>
            {bookmarks.map(category => (
                <ul
                    key={category.description}
                    className='flex flex-col justify-around p-0 m-0 list-none'>
                    <li className='font-bold'>{category.description}</li>
                    {category.bookmarks.map(bookmark => (
                        <li
                            key={bookmark.title}
                            className='flex flex-row items-center mb-1 leading-4'>
                            <a
                                href={bookmark.url}
                                target='_self'
                                rel='noopener noreferrer'
                                className='flex items-center p-2 font-medium no-underline rounded-md outline-none text-ctp-surface2 hover:text-ctp-surface2 hover:bg-ctp-surface0 focus:text-ctp-surface2 focus:bg-ctp-surface1'>
                                <img
                                    src={bookmark.image}
                                    alt={`${bookmark.title} favicon`}
                                    className='h-4 mr-2'
                                />
                                {bookmark.title}
                            </a>
                        </li>
                    ))}
                </ul>
            ))}
        </>
    );
};
