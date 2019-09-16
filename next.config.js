require("dotenv").config() // loading environment variables from potential `.env` file

const withCSS = require('@zeit/next-css')

const customPathAliases = require("./resolve.alias")

module.exports = withCSS({
    env: {
        LOGLEVEL: process.env.LOGLEVEL, // Making the `LOGLEVEL` environment variable available client-side
    },
    webpack(config) {
        config.resolve.alias = {...config.resolve.alias, ...customPathAliases} // Adding the custom path aliases from the `resolve.alias.js` file
        return config
    }
})
