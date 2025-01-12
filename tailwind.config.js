/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        15: '334.074px 1fr 334.074px',
        16: '481.574px 1fr 481.574px',
        17: '72px 54px 1fr',
        18: '72px 54px 1fr',
        19: '496px 1fr 1fr',
        20: '744px 1fr 1fr',
        21: '54px 54px 1fr',
        22: '50px 1fr',
        23: '70px 1fr',
      },
      gridTemplateRows: {
        15: '276px 1fr 120px',
        16: '350px 1fr 220px',
      },
    },
  },
  plugins: [],
};
