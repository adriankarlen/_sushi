import { useEffect, useState } from "react";
import config from "../data/datetime.json";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  const tick = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 30000); // Update clock every 30 seconds
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return (
    <section id="clock">
      <h1 className="sr-only">Clock</h1>
      <h1
        id="time"
        className="font-black text-9xl dark:text-rp-text text-rp-base"
        style={{ fontFamily: "var(--font-clock)" }}
      >
        {time.toLocaleTimeString(
          config.timeFormat,
          config.timeOptions as Intl.DateTimeFormatOptions,
        )}
      </h1>
    </section>
  );
};
