<h2 align="center">
    <img src="https://raw.githubusercontent.com/adriankarlen/_sushi/main/misc/logo.png" width="200" alt="Logo"/>
    <br/>
    <img src="https://raw.githubusercontent.com/adriankarlen/_sushi/main/misc/transparent.png" height="30" width="0px"/>
    _sushi
    <img src="https://raw.githubusercontent.com/adriankarlen/_sushi/main/misc/transparent.png" height="30" width="0px"/>
</h2>

**This is based on the start page
[`_traichu`](https://github.com/Tressley/_traichu), made by
[`Tressly`](https://github.com/Tressley)**

This is a start page for your browser. It is built using
[React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/),
[Tailwind CSS](https://tailwindcss.com/), and [Vite](https://vitejs.dev/). The
color palette used is [Catppuccin](https://github.com/catppuccin) with the
flavour mocha. Fonts used are [Inter](https://rsms.me/inter/) and
[Metropolis](https://github.com/dw5/Metropolis)

&nbsp;

## 🌟 Features

-   **Search**: Search the web using [Brave Search](https://search.brave.com/).
-   **Bookmarks**: Add your favorite websites to the bookmarks section.
-   **Clock**: See the current time in 24-hour format.
-   **Weather**: See the current weather in your city.
-   **Tilde**: Implementation of the [Tilde](https://github.com/xvvvyz/tilde)
    search bar.

&nbsp;

## 🔧 Usage

### 👷‍♂️ Commands

#### 💾 Install dependencies:

```bash
npm install
```

#### 🏃‍♂️ Start the development server:

```bash
npm run start
```

#### 🔨 Build the project:

```bash
npm run build
```

&nbsp;

### 👾 Configuration

#### 🔎 Search

The search bar uses [Brave Search](https://search.brave.com/). To change the
search engine, go to `src\common\data\search.json` and change the `searchEngine`
and `defaultSearchTemplate`.

#### 📚 Bookmarks

The bookmarks are stored in `src\common\data\bookmarks.json`. The `name` field
is the name of the bookmark, the `url` field is the URL of the bookmark, and the
`icon` field is the icon of the bookmark. The icon uses DuckDuckGo favicon api.

#### 🌈 Weather

The weather is fetched from [OpenWeather](https://openweathermap.org/). To make
this work you need to get an API key from OpenWeather and add it to a `.env`
file in the root of the project. The `.env` file should look like this:

```
VITE_OPENWEATHER_API_KEY=your_api_key
```

#### 〰️ Tilde

The tilde is a quick way to access websites. To add a website to the tilde, go
to `src/common/data/commands.json` and add a new object to the object. The key
of the object is the key you press to access the website, and the value is an
object with the `name`, `searchTemplate`, `searchTemplateParam`, `suggestions`
and `url` fields. The `name` field is the name of the website, the
`searchTemplate` field is the search template of the website, the
`searchTemplateParam` field is the search template parameter of the website, the
`suggestions` field is the suggestions of the website, and the `url` field is
the URL of the website.

&nbsp;

### 🚀 Deploying your own version

Ultimately you can deploy it however you want, but here's a basic guide on how
to do it using [Vercel](https://vercel.com/).

#### 📦 Vercel

1. Fork this repository
2. Customize it to your liking.
3. Create a new project on [Vercel](https://vercel.com/).
4. Import your forked repository.
5. Configure the environment variables in Vercel to match your needs. You need
   to set the `VITE_OPEN_WEATHER_API_URL` and the `VITE_OPENWEATHER_API_KEY`
   variable to your own OpenWeather API key for the weather widget to work.
6. Deploy your project.

&nbsp;

## 📜 License

This project is licensed under the MIT License - see the
[LICENSE](https://github.com/adriankarlen/_sushi/blob/main/LICENSE) file
