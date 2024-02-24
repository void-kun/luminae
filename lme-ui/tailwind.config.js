/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        sm: { max: '990px' },
        md: { min: '991px', max: '1440px' },
        lg: { min: '1441px' },
      },
    },
    colors: {
      transparent: 'transparent',
      // text color
      'pr-border': '#D9D9D9',
      'tritary-text': '#9D9D9D',
      disabled: '#C4C4C4',
      'primary-text': '#FFFFFF',
      'secondary-text': '#555555',
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': {
            maxWidth: '990px',
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
          },
          '@screen md': {
            maxWidth: '90rem',
            paddingLeft: '5.625rem',
            paddingRight: '5.625rem',
          },
          '@screen lg': {
            maxWidth: '90rem',
          },
        },
      })
    },
  ],
}
