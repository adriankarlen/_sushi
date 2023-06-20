import bookmarks from '../data/bookmarks';

export const Bookmarks = () => {
    return (
        <>
            {bookmarks.map((category) => (
                <ul
                    key={category.description}
                    className='flex flex-col justify-around list-none m-0 p-0'>
                    <li className='font-bold'>{category.description}</li>
                    {category.bookmarks.map((bookmark) => (
                        <li
                            key={bookmark.title}
                            className='flex items-center flex-row leading-4 mb-1'>
                            <a
                                href={bookmark.url}
                                target='_self'
                                rel='noopener noreferrer'
                                className='p-2 flex items-center rounded-md text-ctp-surface2 no-underline font-medium hover:text-ctp-surface2 hover:bg-ctp-surface0 outline-none focus:text-ctp-surface2 focus:bg-ctp-surface1'>
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
