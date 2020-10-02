const plugins = require('tailwind-react-ui/plugins')

module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss/plugins/container')({}),
    ...Object.keys(plugins).map(name => plugins[name]()),
  ],
}
