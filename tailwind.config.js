/** @type {import('tailwindcss').Config} */

module.exports = {
  // darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px',
    },
    // screens: {
    //   sm: '550px',
    //   md: '800px',
    //   lg: '1200px',
    //   xl: '1440px',
    //   '2xl': '1880px',
    // },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   sans: ['Merriweather', 'serif'],
    // },
    extend: {
      colors: {
        strongCyan: 'hsl(171,66%,44%)',
        lightBlue: 'hsl(233,100%,69%)',
        darkGrayishBlue: 'hsl(210,10%,33%)',
        grayishBlue: 'hsl(201,11%,66%)',
        cyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
      },

      // borderRadius: {
      //   '4xl': '2rem',
      // },
      // colors: {
      //   primary: '#ff5733',
      //   secondary: '#fffc33',
      // },
      // // spacing: {
      // //   6: '2.5rem',
      // //   128: '32rem',
      // // },
      // animation: {
      //   'spin-slow': 'spin 3s linear infinite',
      //   wiggle: 'wiggle 1s ease-in-out infinite',
      // },
      // keyframes: {
      //   wiggle: {
      //     '0%, 100%': { transform: 'rotate(-12deg)' },
      //     '50%': { transform: 'rotate(12deg)' },
      //   },
      // },
      // transitionDuration: {
      //   // custom duration
      //   2000: '2000ms',
      // },
    },
    fontFamily: {
      // sans: ['Bai Jamjuree', 'sans-serif'],
      // sans: ['Josefin Sans', 'sans-serif'],
      sans: ['Poppins', 'sans-serif'],
      // alata: ['Alata'],
      // serif: ['ui-serif', 'Georgia'],
      // mono: ['Rokkitt', 'monospace'],
    },
  },
  spacing: {
    180: '32rem',
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
