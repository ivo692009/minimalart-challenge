const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  projectId: "hyexer",
  chromeWebSecurity: false,
  env: {
    URL:"http://google.com",
  
  },
  e2e: {
    e2e: {
      testIsolation: false,
    },
  },
});