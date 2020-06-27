/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./plugins/**/*.vue",
    "./static/**/*.vue",
    "./layouts/**/*.vue",
    "./store/**/*.vue"
  ],
  theme: {
    extend: {
      colors: {
        'mara': '#CB4D64',
        'astronaut': '#003E65',
        'black': '#1A202C'
      }
    },
    customForms: theme => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.none'),
          backgroundColor: theme('colors.white'),
          border: 'none',
          '&:focus': {
            outline: '2px solid',
            outlineColor: theme('colors.astronaut'),
            boxShadow: 'none',
            borderColor: theme('colors.astronaut')
          }
        },
        checkbox: {
          color: theme('colors.astronaut'),
          borderRadius: theme('borderRadius.none'),
          '&:focus': {
            outline: '2px solid',
            outlineColor: theme('colors.gray.400'),
            boxShadow: 'none',
            borderColor: theme('colors.astronaut')
          }
        },
      },
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}
