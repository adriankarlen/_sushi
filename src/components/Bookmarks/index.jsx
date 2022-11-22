import bookmarks from './bookmarks.json';

export default function Bookmarks() {
    return(
        <>
            {bookmarks.map((category) => (
                <ul>
                {category.bookmarks.map((bookmark, index) => (
                    <li>
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