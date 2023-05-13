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
      },
      spacing: {
        2.75: '7px',
      },
      saturate: {
        120: '1.20',
        135: '1.35',
      },
      screens: {
        sm: '425px',
      },
      colors: {
        crust: '#e4d9ce',
        got: '#dfd7d2',
        arid: '#d6e5df',
        odysseriat: '#d6f0f5',
        salad: '#dbf0e2',
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
