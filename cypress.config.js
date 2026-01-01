const { defineConfig } = require('cypress');
require('dotenv').config(); // loads .env into process.env

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      // 🔑 EXPLICITLY copy env values into Cypress
      config.env = {
        ...config.env, // keep existing Cypress envs
        BASE_URL: process.env.BASE_URL,
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD
      };

      return config; // ❗ mandatory
    }
  }
});