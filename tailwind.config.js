/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFC72C',
        'gold-dark': '#E6A800',
        'gold-light': '#FFD966',
        crimson: '#C0392B',
        'crimson-dark': '#922B21',
        ink: '#0A0A0A',
        'ink-light': '#1A1A1A',
        'ink-mid': '#2A2A2A',
        'smoke': '#F5F0E8',
        'smoke-dark': '#E8E0D0',
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Crimson Pro', 'Georgia', 'serif'],
        mono: ['Share Tech Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
