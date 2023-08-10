import { useAppStore } from '../';
import commands from '../data/commands.json';
import config from '../data/search.json';

type CommandKey = keyof typeof commands;

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
        return pattern.test(str);
    };

    const hasProtocol = (str: string) => {
        const pattern = /^(https?:\/\/)/i;
        return pattern.test(str);
    };

    const splitUrl = (url: string) => {
        const { protocol, hostname, pathname, search } = new URL(url);
        const baseUrl = `${protocol}//${hostname}`;
        const rest = `${pathname}${search}`;
        return [baseUrl, rest];
    };

    const formatSearchUrl = (
        url: string,
        searchPath: string,
        search: string
    ) => {
        if (!searchPath) return url;
        const [baseUrl] = splitUrl(url);
        const params = new URLSearchParams();
        params.set('q', search);
        searchPath = searchPath.replace(/{}/g, params.toString());
        return baseUrl + searchPath;
    };

    const parseQuery = (q: string) => {
        if (isUrl(q.trim())) {
            if (!hasProtocol(q.trim())) {
                return `https://${q.trim()}`;
            }
            return q;
        }

        const commandKey = q as CommandKey;
        if (isCommandKey(commandKey)) {
            return commands[commandKey].url;
        }

        const [searchKey, rawSearch] = q.split(config.commandSearchDelimiter);
        const typedSearchKey = searchKey as CommandKey;

        if (isCommandKey(typedSearchKey)) {
            const { searchTemplate, url: base } = commands[typedSearchKey];
            const search = rawSearch.trimStart();
            const url = formatSearchUrl(base, searchTemplate, search);
            return url;
        }

        const [pathKey, path] = q.split(config.commandPathDelimiter);
        const typedPathKey = pathKey as CommandKey;

        if (isCommandKey(typedPathKey)) {
            const { url: base } = commands[typedPathKey];
            const [baseUrl] = splitUrl(base);
            const url = `${baseUrl}/${path}`;
            return url;
        }

        const [baseUrl, rest] = splitUrl(config.defaultSearchTemplate);
        const url = formatSearchUrl(baseUrl, rest, q);
        return url;
    };

    function isCommandKey(key: string): key is CommandKey {
        return Object.keys(commands).includes(key);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { q } = e.currentTarget;
        const url = parseQuery(q.value);
        window.open(url, '_self', 'noopener noreferrer');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { value } = e.target;
        useAppStore.setState({ q: value, commandKey: calcBaseCommand(value) });
    };

    const calcBaseCommand = (q: string) => {
        const splitBy = config.commandPathDelimiter;
        const [pathKey] = q.split(new RegExp(`${splitBy}(.*)`)) ?? ['', ''];
        return commands.hasOwnProperty(pathKey) ? pathKey : '';
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-auto w-full'>
            <input
                type='text'
                id='q'
                name='q'
                autoFocus
                onChange={handleInputChange}
                autoComplete='off'
                className='p-4 w-full bg-transparent bg-[right_1.25rem_center] bg-no-repeat bg-[length:1.5rem_1.5rem] rounded-full border-2 border-ctp-surface2 focus:outline focus:outline-4 focus:outline-ctp-red/25 focus:bg-ctp-surface0/25 focus:border-ctp-red hover:border-ctp-overlay0'
            />
            <button className='sr-only' tabIndex={-1}>
                Search
            </button>
        </form>
    );
};
