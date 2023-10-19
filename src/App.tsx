import {
    Bookmarks,
    Clock,
    Commands,
    DateTimeWidget,
    IconLinks,
    SearchBox,
    useAppStore,
    WeatherWidget
} from './common';

function App() {
    const command = useAppStore(state => state.commandKey);
    return (
        <div className='min-h-screen App mocha'>
            <main className='flex flex-col items-center justify-center min-h-screen bg-rp-base text-rp-text'>
                <header className='absolute top-0 flex-row justify-center hidden w-full p-4 animate-fade md:flex'>
                    <DateTimeWidget />
                    <WeatherWidget />
                </header>
                <section className='flex flex-col justify-center flex-1 w-full max-w-xs p-8 pb-2 gap-y-8 md:p-0 md:max-w-3xl'>
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
                    <section className='h-48'>
                        {command ? <Commands /> : <Bookmarks />}
                    </section>
                </section>
            </main>
        </div>
    );
}

export default App;
