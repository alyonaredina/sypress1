const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    env: {
      //login_url: '/login',
      //products_url: '/products',
      mac: {'h': 1536, 'w': 960},
      mobile: {'h': 360, 'w': 760}
    },
  },  
})
