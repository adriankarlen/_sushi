import commands from '../data/commands.json';
import config from '../data/search.json';

export const SearchBox = () => {
    const isUrl = (str: string) => {
        const pattern = new RegExp(
            '^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$',
            'i'
        ); // fragment locator
        return !!pattern.test(str);
    };

    const hasProtocol = (str: string) => {
        const pattern = /^(https?:\/\/)/i;
        return !!pattern.test(str);
    };

    const splitUrl = (url: string) => {
        const parser = document.createElement('a');
        parser.href = url;
        const baseUrl = `${parser.protocol}//${parser.hostname}`;
        const rest = `${parser.pathname}${parser.search}`;
        return [baseUrl, rest];
    };

    const formatSearchUrl = (
        url: string,
        searchPath: string,
        search: string
    ) => {
        if (!searchPath) return url;
        const [baseUrl] = splitUrl(url);
        const urlQuery = encodeURIComponent(search);
        searchPath = searchPath.replace(/{}/g, urlQuery);
        return baseUrl + searchPath;
    };

    const parseQuery = (raw: string) => {
        const q = raw.trim() as keyof typeof commands;
        if (isUrl(q)) {
            if (!hasProtocol(q)) {
                return `https://${q}`;
            }
            return q;
        }

        if (commands[q]) {
            const url = commands[q].url;
            return url;
        }

        let splitBy = config.commandSearchDelimiter;
        const [searchKey, rawSearch] = q.split(new RegExp(`${splitBy}(.*)`));
        const typedSearch = searchKey as keyof typeof commands;

        if (commands[typedSearch]) {
            const { searchTemplate, url: base } = commands[typedSearch];
            const search = rawSearch.trim();
            const url = formatSearchUrl(base, searchTemplate, search);
            return url;
        }

        splitBy = config.commandPathDelimiter;
        const [pathKey, path] = q.split(new RegExp(`${splitBy}(.*)`));
        const typedPathKey = pathKey as keyof typeof commands;

        if (commands[typedPathKey]) {
            const { url: base } = commands[typedPathKey];
            const [baseUrl] = splitUrl(base);
            const url = `${baseUrl}/${path}`;
            return url;
        }

        const [baseUrl, rest] = splitUrl(config.defaultSearchTemplate);
        const url = formatSearchUrl(baseUrl, rest, q);
        return url;
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            q: { value: string };
        };
        const q = target.q.value;
        const url = parseQuery(q);
        window.open(url, '_self', 'noopener noreferrer');
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-auto w-full'>
            <input
                type='text'
                id='q'
                name='q'
                autoFocus
                className='p-4 w-full bg-transparent bg-[right_1.25rem_center] bg-no-repeat bg-[length:1.5rem_1.5rem] rounded-full border-2 border-ctp-surface2 focus:outline focus:outline-4 focus:outline-ctp-red/25 focus:bg-ctp-surface0/25 focus:border-ctp-red hover:border-ctp-overlay0'
            />
            <button className='sr-only' tabIndex={-1}>
                Search
            </button>
        </form>
    );
};
