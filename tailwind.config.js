module.exports = {
  content: ["./src/**/*.{html,njk}"],

  //darkMode: 'selector', //remove this to change website to light mode
  darkMode: 'class', //remove this to change website to light mode
  theme: {
    extend: {
      screens: {
        lg: '1024px', // Default is 1024px
      },
      colors: {
        'primary': {
          emeraldGreen: '#005D40', //Usage: Highlighting sections, secondary buttons, accent elements
          emeraldGreenTo: '#007a5d',
          greenColor: '#018659',

          deepGreen: '#052e28', //Usage: Header, Footer, main background elements
          deepGreenTo: '#083a31',

          metallicGold: '#D4AF37', //Usage: Logo, primary buttons, call-to-action elements
          metallicGoldTo: '#e1c966',

          mintGreen: '#D6E8D6', //Usage: Background for highlight sections, cards, secondary elements
          mintGreenTo: '#bdd6bc',

          honeyDrew: '#F0FFF0',
          honeyDrewTo: '#e8f7e8',

          midnightGreen: '#07161E', //Usage: Footer background, secondary background elements
          midnightGreenTo: '#102a36',

          darkTeal: '#032E28', //Usage: Main background color
          darkTealTo: '#08443f',

          LavenderBlush: '#F3E8FF' ,
          PowderPink: '#FDE2E4',
          SoftSage: '#E5F4E3',
          SoftSkyBlue: '#E0F7FA',
          WarmGray: '#F5F5F5'

        },
        white: '#fff',
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
       

        'texture-dots': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23018659' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",

        'texture-wave': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%23018659' fill-opacity='0.4' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E\")"

        // 'main-texture': "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23018659' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E')"
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      lora: ['Lora', 'serif'],
      merriweather: ['Merriweather', 'serif'],
      'body': [
        'Lora',
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
