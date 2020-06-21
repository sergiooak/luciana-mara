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
    }
  },
  variants: {},
  plugins: []
}
