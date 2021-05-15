module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '0': '0',
      '1/2': '125px',
      '1': '250px',
    },
    extend: { 
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/img/background.jpg')",
      }),
      animation: {
        pulsing: 'pulse 2s cubic-bezier(0.4,0,0.6,1) 10.0s',
      },
      keyframes: {
        pulsing: {
          '0%,100%': {opacity: '0.75'},
          '50%': {opacity: '0.25'},  
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
