import links from "../data/links.json";

export const IconLinks = () => {
  const colorMap = [
    "stroke-rp-love",
    "stroke-rp-gold",
    "stroke-rp-rose",
    "stroke-rp-pine",
    "stroke-rp-foam",
    "stroke-rp-iris",
    "stroke-rp-text"
  ];

  return (
    <ul className="flex flex-row flex-wrap justify-center p-0 list-none gap-x-4 gap-y-4 md:column-gap-0 md:justify-around md:p-0">
      {links.map((link, index) => (
        <li key={link.title}>
          <a
            href={link.url}
            target="_self"
            rel="noopener noreferrer"
            className={`block transition-fill duration-125 ease-in-out ${colorMap[index]} focus:outline-none focus:opacity-50`}
          >
            <svg
              className="h-6"
              role="img"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <title>{link.title}</title>
              {link.paths.map(path => (
                <path d={path} key={path} />
              ))}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};
