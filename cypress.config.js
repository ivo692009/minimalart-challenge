const { defineConfig } = require("cypress");

module.exports = defineConfig({
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