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
        archivo: ['var(--font-archivo-black)'],
        roboto: ['var(--font-roboto)'],
      },
      fontSize: {
        '7.5xl': ['5.25rem', { lineHeight: '6rem' }],
        '8.5xl': ['7rem'],
        '11xl': [
          '11rem',
          {
            lineHeight: '1',
          },
        ],
      },
      spacing: {
        '8.3/10': '83%',
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
    },
  },
  plugins: [],
};
