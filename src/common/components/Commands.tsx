import { useAppStore } from "../";
import commands from "../data/commands.json";
import config from "../data/search.json";

type CommandKey = keyof typeof commands;

export const Commands = () => {
  const activeKey = useAppStore((state) => state.commandKey) as CommandKey | "";

  const splitUrl = (url: string) => {
    const { protocol, hostname } = new URL(url);
    return `${protocol}//${hostname}`;
  };

  const formatCommandUrl = (key: CommandKey, suggestion: string) => {
    const [, path] = suggestion.split(
      new RegExp(`${config.commandPathDelimiter}(.*)`),
    );
    const baseUrl = splitUrl(commands[key].url);
    return `${baseUrl}/${path}`;
  };

  const linkClass =
    "flex flex-col items-center px-6 py-2 m-2 font-medium text-center border-2 rounded-full bg-rp-surface border-rp-overlay text-rp-muted hover:text-rp-rose hover:bg-rp-overlay hover:border-rp-rose/75 focus-visible:outline-none focus-visible:text-rp-love focus:text-rp-love";

  if (activeKey) {
    const command = commands[activeKey];
    return (
      <div id="commands" className="flex flex-col items-center justify-around">
        <h2 className="sr-only">Commands</h2>
        <h4 className="text-lg font-bold">{command.name}</h4>
        <div className="flex flex-row flex-wrap justify-center">
          {command.suggestions.map((suggestion: string) => (
            <a
              key={suggestion}
              href={formatCommandUrl(activeKey, suggestion)}
              className={linkClass}
            >
              <span>{suggestion}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      id="commands"
      className="flex flex-row flex-wrap items-start justify-around"
    >
      <h2 className="sr-only">Commands</h2>
      {(Object.keys(commands) as CommandKey[]).map((key) => (
        <a key={key} href={commands[key].url} className={linkClass}>
          <span>{key}</span>
        </a>
      ))}
    </div>
  );
};
