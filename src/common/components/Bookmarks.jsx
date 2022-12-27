import bookmarks from '../data/bookmarks';

export const Bookmarks = () => {
    return(
        <>
            {bookmarks.map((category) => (
                <ul>
                {category.bookmarks.map((bookmark, index) => (
                    <li key= {bookmark.id} >
                        <a
                            href={bookmark.url}
                            key={index}
                            target='_self'
                            rel='noopener noreferrer'
                        >
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