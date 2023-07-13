const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  projectId: '71oma6',
  chromeWebSecurity: false,
  e2e: {
      testIsolation: false,
  },
});