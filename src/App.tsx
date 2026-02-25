import {
  Clock,
  Commands,
  DateTimeWidget,
  SearchBox,
  useAppStore,
  WeatherWidget,
} from "./common";

import searchConfig from "./common/data/search.json";

function App() {
  const q = useAppStore((state) => state.q);
  return (
    <div className="min-h-screen App mocha">
      <main className="flex flex-col items-center justify-center min-h-screen bg-rp-base text-rp-text">
        <header className="absolute top-0 flex-row justify-center hidden w-full p-4 animate-fade md:flex">
          <DateTimeWidget />
          <WeatherWidget />
        </header>
        <section className="flex flex-col justify-center flex-1 w-full max-w-xs p-8 pb-2 gap-y-8 md:p-0 md:max-w-3xl">
          <h1 className="sr-only">_sushi</h1>
          <div className="flex flex-col justify-end items-center min-h-[8rem]">
            {!q && (
              <aside className="flex justify-around">
                <Clock />
              </aside>
            )}
            {searchConfig.enabled && (
              <section id="search" className="flex justify-center">
                <h2 className="sr-only">Search</h2>
                <SearchBox />
              </section>
            )}
          </div>
          <section className="h-48">
            <Commands />
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
