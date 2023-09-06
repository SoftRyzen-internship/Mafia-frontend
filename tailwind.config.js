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
      backgroundImage: {
        grad_100:
          'linear-gradient(90deg, #ff057c 0%, #8d0b93 50%, #321575 100%)',
        grad_200:
          'linear-gradient(90deg, #ff81bd 0%, #934397 50%, #4e3d75 100%)',
        grad_300:
          'linear-gradient(90deg, #1f1f1f 0%, #562758 50%, #261351 100%)',
        grad_400:
          'linear-gradient(270deg, rgba(117, 103, 140, 0.53) 0%, rgba(117, 103, 140, 0) 100%)',
        grad_500:
          'linear-gradient(270deg, rgba(22, 20, 28, 0) 0%, #16141c 100%)',
      },
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
        gray: {
          DEFAULT: '#737373',
          light: '#73737380',
          disabledBg: '#474747',
          disabledText: '#676767',
        },
        primary: {
          light: {
            100: '#CABBE954',
            200: '#7E5A8F',
            300: '#AC88C9',
            400: '#D98ADE',
            500: '#D01DE1',
            600: '#8D0B93',
            700: '#6A206B',
            800: '#3E325F',
          },
          dark: {
            100: '#16141CB2',
            200: '#16141C66',
            300: '#19081A',
            400: '#141318',
            500: '#130813',
          },
        },
        notify: {
          DEFAULT: '#ffffff',
          error: '#FC1132',
          success: '#0AA02B',
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
