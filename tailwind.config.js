/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontWeight: {
        normal: "400"
      }
    },
    strokeOpacity: {
      0: "0",
      25: "0.25",
      50: "0.5",
      75: "0.75",
      100: "1"
    },
    colors: {
      rp: {
        base: "hsl(var(--rp-base) / <alpha-value>)",
        surface: "hsl(var(--rp-surface) / <alpha-value>)",
        overlay: "hsl(var(--rp-overlay) / <alpha-value>)",
        muted: "hsl(var(--rp-muted) / <alpha-value>)",
        subtle: "hsl(var(--rp-subtle) / <alpha-value>)",
        text: "hsl(var(--rp-text) / <alpha-value>)",
        love: "hsl(var(--rp-love) / <alpha-value>)",
        gold: "hsl(var(--rp-gold) / <alpha-value>)",
        rose: "hsl(var(--rp-rose) / <alpha-value>)",
        pine: "hsl(var(--rp-pine) / <alpha-value>)",
        foam: "hsl(var(--rp-foam) / <alpha-value>)",
        iris: "hsl(var(--rp-iris) / <alpha-value>)",
        highlightLow: "hsl(var(--rp-highlightLow) / <alpha-value>)",
        highlightMed: "hsl(var(--rp-highlightMed) / <alpha-value>)",
        highlightHigh: "hsl(var(--rp-highlightHigh) / <alpha-value>)"
      }
    }
  },
  variants: {
    strokeOpacity: ["responsive"]
  }
};
