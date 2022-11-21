import './App.css';
import IconLinks from './components/IconLinks';
import Bookmarks from './components/Bookmarks';
import Weather from './components/Weather';
import DateTime from './components/DateTime';

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
                        <img src='assets/_sushi.png' alt='sushi' />
                    </aside>
                    <nav id='dock'>
                        <IconLinks />
                    </nav>
                    <section id='search'>
                        <h2 className='sr-only'>Search</h2>
                        <form
                            action='https://search.brave.com/search/'
                            method='get'
                        >
                            <input type='text' id='q' name='q' autoFocus />
                            <button className='sr-only' tabIndex='-1'>
                                Search
                            </button>
                        </form>
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
