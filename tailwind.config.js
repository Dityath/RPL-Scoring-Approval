module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'mulish': ['Mulish', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      utama: {
        orange: '#FF6800',
        gray: '#C4C4C4',
        white: '#FFFFFF',
        textGray: '#828282',
      }
    }, 
    extend: {
      backgroundImage: theme => ({
        'index-pattern': "url('/background/bg-page-index.png')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
