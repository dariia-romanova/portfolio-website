/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'basic': '#F0E9E1',
      'black': '#353535',
      'pink': '#EE9CD8',
      'light-pink': '#F3C0C0',
      'green': '#61BC8F',
      'blue': '#4978D6',
      'transparent': 'transparent',
    },
    fontSize: {
      'sm': '16px',
      'md': '24px',
      'lg': '32px',
      'xl': '44px',
      'xxl': '58px',
      '3xl': '100px',
      '4xl': '120px',
    },
    extend: {
      fontFamily: {
        serif: ['Koh Santepheap', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
