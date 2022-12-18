/** @type {import('tailwindcss').Config} */

module.exports = {
  // darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
      sans: ['Mulish', 'sans-serif'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['Rokkitt', 'monospace'],
    },
  },
  plugins: [],
};
