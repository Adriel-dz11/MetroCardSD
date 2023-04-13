/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
          'spin-slow': 'spin 2s linear infinite',
          'cover': 'cover 1s ease-in-out normal forwards',
          'coverReverse': 'coverReverse 2s ease-in-out normal forwards',
          'hidden': 'hidden 2s ease-in-out normal forwards',
          'hiddenReverse': 'hiddenReverse 2s ease-in-out normal forwards',
          'pushLeft': 'pushLeft 2s ease-in-out normal forwards',
          'pushRight': 'pushRight 2s ease-in-out normal forwards',
      },
      keyframes:
      {
          cover: {
              '0%': { height: '0' },
              '100%': { height: '100%' },
          },
          coverReverse: {
              '0%': { height: '100%' },
              '100%': { height: '0' }
          },
          hidden: {
              '0%': { display: 'absolute' },
              '50%': { opacity: '0.75' },
              '75%': { opacity: '0.50' },
              '100%': { opacity: '0' }

          },
          hiddenReverse: {
              '0%': { opacity: '0' },
              '50%': { opacity: '0.75' },
              '75%': { opacity: '0.50' },
              '100%': { display: 'absolute' }
          },
          pushLeft: {
              '0%': { transform: "translateX(0)" },
              '50%': { transform: "translateX(-1000px)" },
              '100%': { display: "none" }
          },
          pushRight: {
              '0%': { transform: "translateX(1000px)" },
              '100%': { transform: "translateX(0)" }
          }
      },
    },
  },
  plugins: [],
}