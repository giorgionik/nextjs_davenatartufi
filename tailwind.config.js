module.exports = {
  purge: [
    
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'sans-serif'],
        'sourcesans': ['Source Sans Pro', 'sans-serif'],
      },
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
        'footer-home': "url('https://res.cloudinary.com/niknet/image/upload/e_brightness_hsb:-80/v1609624823/davena%20tartufi/footer_qmjywp.jpg')",
        'footer-home-mini': "url('https://res.cloudinary.com/niknet/image/upload/e_brightness_hsb:-80,q_auto:low,w_400/v1609624823/davena%20tartufi/footer_qmjywp.jpg')",
        'olio': "url('https://res.cloudinary.com/niknet/image/upload/v1609624194/davena%20tartufi/olio_mz_fvv0up.jpg')",
        'tamno': 'rgba(0, 0, 0, 0.5)',
        

      },
      backgroundSize: {
        '60%': '60%',
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
