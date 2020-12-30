module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'black-t-50': 'rgba(0,0,0,0.5)',
        'darker': '#CCCCCC',
      },
      backgroundImage: {
        'hero-home': "url('https://res.cloudinary.com/niknet/image/upload/e_brightness_hsb:-60/v1609025806/davena%20tartufi/hero1_xcoc34.jpg')",
      },
      borderColor: {
        'davena': '#C8A169',
      },
      textColor: {
        'davena': '#C8A169',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
