const withSass = require('@zeit/next-sass')

const customPathAliases = require("./resolve.alias")

module.exports = withSass({
    cssModules: true,
    webpack(config) {
        config.resolve.alias = {...config.resolve.alias, ...customPathAliases} // Adding the custom path aliases from the `resolve.alias.js` file
        return config
    }
})
