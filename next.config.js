require("dotenv").config() // loading environment variables from potential `.env` file

const withCSS = require('@zeit/next-css')

const customPathAliases = require("./resolve.alias")

module.exports = withCSS({
    env: {
        DATA_URL: process.env.DATA_URL || "http://localhost:3000/static/test-data-v2-demo.json", // Making the `DATA_URL` environment variable available client-side
        LOGLEVEL: process.env.LOGLEVEL || "debug", // Making the `LOGLEVEL` environment variable available client-side
    },
    webpack(config) {
        config.resolve.alias = {...config.resolve.alias, ...customPathAliases} // Adding the custom path aliases from the `resolve.alias.js` file
        return config
    }
})
