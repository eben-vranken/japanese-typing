import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background
        body: '#121212',
        primary: '#157145',
        correct: '#28a12c',
        false: '#C5283D'
      },
      animation: {
        fade: 'fadeIn 200ms ease-in-out',
        cursor: 'cursorBlink 50ms ease-in-out infinite'
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        cursorBlink: {
          '0%': { borderLeftColor: 'transparent' },
          '50%': { borderLeftColor: '#FFFFF' },
          '100%': { borderLeftColor: 'transparent' },
        }
      }),
    },
  },
  plugins: [],
};
export default config;
