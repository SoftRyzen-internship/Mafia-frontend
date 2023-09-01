/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './views/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      xxl: '1752px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },

    // SHADOW
    boxShadow: {
      example: '0px 0px 40px 0px rgba(172, 136, 201, 0.19)',
    },
    // THEME
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
      backgroundImage: {},
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        raleway: ['var(--font-raleway)'],
      },
      fontSize: {},
      // ALL COLORS
      colors: {
        body: '#040404',
        black: {
          DEFAULT: '#000000', // class="bg-black text-black border-black"
          dark: '#171717', // class="bg-black-light text-black-light border-black-light"
          light: '#303030',
        },
        white: {
          DEFAULT: '#ffffff',
          light: '#F3F3F3',
          dark: '#AEAEAE',
        },
      },
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '1.5rem',
          md: '2rem',
          xl: '2rem',
          xxl: '2rem',
        },
      },
      // KEYFRAMES
      keyframes: {
        side: {
          '0%, 100%': { transform: 'translateX(25%)' },
          '50%': { transform: ' translateY(0)' },
        },
      },
      // ANIMATION
      animation: {
        side: 'side 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
