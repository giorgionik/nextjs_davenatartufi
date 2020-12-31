module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'mini': {'max': '380px'},
      },
      backgroundColor: {
        'black-t-50': 'rgba(0,0,0,0.5)',
        'darker': '#CCCCCC',
      },
      backgroundImage: {
        'hero-home': "url('https://res.cloudinary.com/niknet/image/upload/e_brightness_hsb:-60/v1609430036/davena%20tartufi/hero_comp_cmganq.jpg')",
        'hero-home-mini': "url('https://res.cloudinary.com/niknet/image/upload/e_brightness_hsb:-60,q_auto:low,w_400/v1609430036/davena%20tartufi/hero_comp_cmganq.jpg')",
        'tamno': 'rgba(0, 0, 0, 0.5)',

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
