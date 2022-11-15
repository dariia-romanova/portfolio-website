/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'basic': '#F0E9E1',
      'black': '#353535',
      'pink': '#EE9CD8',
      'light-pink': '#F3C0C0',
      'green': '#61BC8F',
      'blue': '#4978D6',
    },
    extend: {
      fontFamily: {
        serif: ['Koh Santepheap', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
