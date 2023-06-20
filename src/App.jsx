import {
    Bookmarks,
    Clock,
    DateTime,
    IconLinks,
    SearchBox,
    Weather
} from './common';

function App() {
    return (
        <div className='App min-h-screen mocha'>
            <main className='bg-ctp-base text-ctp-text flex items-center justify-center min-h-screen flex-col'>
                <header className='animate-fade hidden md:flex flex-row justify-center items-center p-4 absolute top-0 w-full'>
                    <DateTime />
                    <Weather />
                </header>
                <section className='flex flex-1 flex-col justify-center p-8 pb-2 gap-y-8 md:p-0 w-full max-w-xs md:max-w-3xl'>
                    <h1 className='sr-only'>_sushi</h1>
                    <aside className='flex justify-around'>
                        <Clock />
                    </aside>
                    <nav id='dock'>
                        <IconLinks />
                    </nav>
                    <section id='search' className='flex justify-center'>
                        <h2 className='sr-only'>Search</h2>
                        <SearchBox />
                    </section>
                    <section
                        id='bookmarks'
                        className='flex flex-col md:flex-row items-start justify-around'>
                        <h2 className='sr-only'>Bookmarks</h2>
                        <Bookmarks />
                    </section>
                </section>
            </main>
        </div>
    );
}

export default App;
