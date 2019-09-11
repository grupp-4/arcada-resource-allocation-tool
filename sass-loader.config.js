const path = require("path")

module.exports = {
    includePaths: [
        path.resolve(__dirname, "./node_modules"), // when using `@import`, also looks in this directory
        path.resolve(__dirname, "./styles") // when using `@import`, also looks in this directory
    ],
    sourceMap: process.env.NODE_ENV === "development" // enables source maps if Node environment is set to "development"
}

