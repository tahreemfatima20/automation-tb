const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,

    // timeout 
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 20000,
    requestTimeout: 60000,
    responseTimeout: 60000,

    setupNodeEvents(on, config) {
      config.env.email = process.env.UAT_EMAIL;
      config.env.password = process.env.UAT_PASSWORD;
      return config;
    },
  },
});