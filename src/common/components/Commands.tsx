import { useAppStore } from "../";
import commands from "../data/commands.json";
import config from "../data/search.json";

export const Commands = () => {
  const key = useAppStore(state => state.commandKey) as keyof typeof commands;

  const splitUrl = (url: string) => {
    const { protocol, hostname, pathname, search } = new URL(url);
    const baseUrl = `${protocol}//${hostname}`;
    const rest = `${pathname}${search}`;
    return [baseUrl, rest];
  };

  const formatCommandUrl = (suggestion: string) => {
    const [, path] = suggestion.split(
      new RegExp(`${config.commandPathDelimiter}(.*)`)
    );
    const { url: base } = commands[key];
    const [baseUrl] = splitUrl(base);
    return `${baseUrl}/${path}`;
  };

  const printCommandSuggestions = () => {
    const { suggestions } = commands[key];
    return suggestions.map((suggestion: string) => {
      return (
        <a
          key={suggestion}
          href={formatCommandUrl(suggestion)}
          className="flex flex-col px-6 py-2 m-2 font-medium text-center border-2 rounded-full bg-rp-surface border-rp-overlay text-rp-muted hover:text-rp-rose hover:bg-rp-overlay hover:border-rp-rose/75 focus-visible:outline-none focus-visible:text-rp-love focus:text-rp-love"
        >
          <span>{suggestion}</span>
        </a>
      );
    });
  };

  return (
    <div
      id="bookmarks"
      className="flex flex-row items-start justify-around md:flex-row"
    >
      <h2 className="sr-only">Commands</h2>
      {key && (
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-bold">
            <span>{commands[key].name}</span>
          </h4>
          <div className="flex flex-row w-full">
            {printCommandSuggestions()}
          </div>
        </div>
      )}
    </div>
  );
};
