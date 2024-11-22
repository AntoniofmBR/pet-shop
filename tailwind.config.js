/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        blues: {
          blue_700: '#0B0B68',
          blue_500: '#0D63F8',
          blue_300: '#1B263B',
          blue_200: '#072AC8',
        },
        whites: {
          white_400: '#E2DCDE',
          white_300: '#D9D9D9',
          white_200: '#F0EFEB',
        },
        grays: {
          gray_700: '#03071E',
          gray_200: '#D4BBBB',
          gray_400: '#2B2D42',
          gray_500: '#212529',
        },
        blacks: {
          black_500: '#000000',
          black_100: '#262626',
        },
        greens: {
          green_300: '#007F5F',
        },
        purples: {
          purple_300: '#7C1C9F',
          purple_200: '#6228D7',
        },
        pinks: {
          pink_100: '#EE2A7B',
        },
        yellows: { 
          yellow_100: '#F9CE34',
        },
        reds: {
          red_100: '#FF0000',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
      }
    },
  },
  plugins: [],
}