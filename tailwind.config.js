/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        roboto: ['var(--font-roboto)'],
      },
      fontSize: {
        '4.5xl': ['40px'],
        '6.5xl': ['66px'],
        '7.5xl': ['5rem', { lineHeight: '6rem' }],
        '10xl': ['9.5rem'],
      },
      spacing: {
        '7/10': '70%',
        '8.3/10': '83%',
        2.75: '7px',
      },
      borderWidth: {
        6: '6px',
      },
      saturate: {
        120: '1.20',
        125: '1.25',
        135: '1.35',
      },
      screens: {
        xs: '400px',
        sm: '576px',
        '3xl': '2000px',
      },
      colors: {
        pizza: '#e4d9ce',
        got: '#dfd7d2',
        tab: '#26282a',
        red: {
          25: '#fd615d',
        },
        yellow: {
          25: '#febc40',
        },
        green: {
          25: '#35c94a',
        },
      },
      boxShadow: {
        '3xl': '0px 8px 40px 4px rgb(0 0 0 / 20%)',
      },
      lineHeight: {
        'extra-tight': '1.3',
      },
    },
  },
  plugins: [],
};
