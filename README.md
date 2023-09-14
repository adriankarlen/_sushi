<h2 align="center">
    <img src="https://raw.githubusercontent.com/adriankarlen/_sushi/main/misc/logo.png" width="200" alt="Logo"/>
    <br/>
    <img src="https://raw.githubusercontent.com/adriankarlen/_sushi/main/misc/transparent.png" height="30" width="0px"/>
    🍣 _sushi
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

## 🌟 Features

-   **Search**: Search the web using [Brave Search](https://search.brave.com/).
-   **Bookmarks**: Add your favorite websites to the bookmarks section.
-   **Clock**: See the current time in 24-hour format.
-   **Weather**: See the current weather in your city.
-   **Tilde**: Quick access to websites using keys, including searching the
    site.

## 🔧 Usage

### 👷‍♂️ Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
vite start
```

3. Build the project:

```bash
vite build
```

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

#### 🏄 Tilde

The tilde is a quick way to access websites. To add a website to the tilde, go
to `src/common/data/commands.json` and add a new object to the object. The key
of the object is the key you press to access the website, and the value is an
object with the `name`, `searchTemplate`, `searchTemplateParam`, `suggestions`
and `url` fields. The `name` field is the name of the website, the
`searchTemplate` field is the search template of the website, the
`searchTemplateParam` field is the search template parameter of the website, the
`suggestions` field is the suggestions of the website, and the `url` field is
the URL of the website.

## 📜 License

This project is licensed under the MIT License - see the
[LICENSE](https://github.com/adriankarlen/_sushi/blob/main/LICENSE) file
