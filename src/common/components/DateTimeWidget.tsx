import config from "../data/datetime.json";

export const DateTimeWidget = () => {
  const date = new Date();
  return (
    <section className="flex flex-1">
      <h4 className="sr-only">Date</h4>
      <h4 className="font-bold">
        {date.toLocaleDateString(
          config.lang,
          config.dateOptions as Intl.DateTimeFormatOptions
        )}
      </h4>
    </section>
  );
};
