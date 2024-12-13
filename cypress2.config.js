const { defineConfig } = require("cypress");

module.exports = defineConfig({
e2e: {
setupNodeEvents(on, config) {},
baseUrl: "http://localhost:3000",
/*env: {
    viewportWidth: "viewportWidth",
    viewportHeight: "viewportHeight"    
},*/
viewportWidth: 360,
viewportHeight: 740,
retries: 0,
},
});