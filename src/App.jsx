import { Bookmarks, Clock, DateTime, IconLinks, SearchBox, Weather } from '/src/common';
import './App.css';

function App() {
    return (
        <div className='App'>
            <main>
                <header>
                    <DateTime />
                    <Weather />
                </header>
                <section id='adk-sushi'>
                    <h1 className='sr-only'>_sushi</h1>
                    <aside>
                        <Clock />
                    </aside>
                    <nav id='dock'>
                        <IconLinks />
                    </nav>
                    <section id='search'>
                        <h2 className='sr-only'>Search</h2>
                        <SearchBox />
                    </section>
                    <section id='bookmarks'>
                        <h2 className='sr-only'>Bookmarks</h2>
                        <Bookmarks />
                    </section>
                </section>
            </main>
        </div>
    );
}

export default App;
