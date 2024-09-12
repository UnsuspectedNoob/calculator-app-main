/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        league: '"League Spartan"',
      },
      colors: {
        "main-bg": "hsla(var(--main-bg))",
        "toggle-bg": "hsla(var(--toggle-bg))",
        "keypad-bg": "hsla(var(--keypad-bg))",
        "screen-bg": "hsla(var(--screen-bg))",
        "key-bg": "hsla(var(--key-bg))",
        "key-shadow": "hsla(var(--key-shadow))",
        "accent-bg": "hsla(var(--accent-bg))",
        "accent-shadow": "hsla(var(--accent-shadow))",
        "inverted-bg": "hsla(var(--inverted-bg))",
        "inverted-shadow": "hsla(var(--inverted-shadow))",
        main: "hsla(var(--main))",
        keys: "hsla(var(--keys))",
        accent: "hsla(var(--accent))",
        inverted: "hsla(var(--inverted))",
      },
    },
  },
  plugins: [],
};
