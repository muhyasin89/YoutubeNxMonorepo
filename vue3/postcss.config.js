/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path');


module.exports = {
  plugins: [...require('@samatech/postcss-basics')()],
  tailwindcss: {
    config: join(__dirname, 'tailwind.config.js'),
  },
  autoprefixer: {},
};
