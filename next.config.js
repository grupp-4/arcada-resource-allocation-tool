require("dotenv").config() // loading environment variables from potential `.env` file

const sassLoaderOptions = require("./sass-loader.config")
const withSass = require('@zeit/next-sass')
const customPathAliases = require("./resolve.alias")

module.exports = withSass({
    cssModules: true, // Enabling CSS Modules
    sassLoaderOptions: sassLoaderOptions, // Setting the SASS loader options defined in the `sass-loader.config.js` file
    webpack(config) {
        config.resolve.alias = {...config.resolve.alias, ...customPathAliases} // Adding the custom path aliases from the `resolve.alias.js` file
        return config
    }
})
