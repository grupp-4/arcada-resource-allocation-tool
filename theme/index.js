import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes"

import params from "./custom-parameters"

function executeThemeCreation(mode, options) {
    const theme = responsiveFontSizes(createMuiTheme({
        palette: {
            type: mode,
            primary: {
                light: params.primaryLight,
                main: params.primaryMain,
                dark: params.primaryDark
            },
            secondary: {
                light: params.secondaryLight,
                main: params.secondaryMain,
                dark: params.secondaryDark,
            }
        }
    }))
    theme.preference = options && options.explicit ? mode : "auto"
    return theme
}

function autoSetTheme(log) {
    let mode = "light"
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches
    const notSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches
    const notSupported = !isDarkMode && !isLightMode && !notSpecified
    switch (true) {
        case isLightMode:
            mode = "light"
            log.info("Adapting to client's preference of theme. Setting theme to light")
            break
        case isDarkMode:
            mode = "dark"
            log.info("Adapting to client's preference of theme. Setting theme to dark")
            break
        case notSpecified || notSupported:
            const date = new Date()
            const hours = date.getHours()
            if (hours < 7 || hours >= 23) mode = "dark"
            else mode = "light"
            log.info(
                `Client doesn't express any kind of preference regarding theme.`,
                `Setting theme to ${mode} based on local time (${date.toLocaleTimeString()})`
            )
    }
    window._theme = mode
    return executeThemeCreation(mode)
}

// Creates and exports the Material-UI theme used in the app in one statement
// To customize the theme, modify the object that's given as an argument to createMuiTheme()
// (see https://material-ui.com/customization/theming/#createmuitheme-options-theme for details)
// You can also customize aspects of the responsiveFontSizes function which enhances the theme created by createMuiTheme()
// (see https://material-ui.com/customization/theming/#createmuitheme-options-theme for details)
export default function createTheme(log) {
    if (typeof window !== "undefined") {
        const mode = window.localStorage.theme
        if (mode) {
            log.info(`Adapting to client's explicit preference of theme. Setting theme to ${mode}`)
            window._theme = mode
            return executeThemeCreation(mode, {explicit: true})
        }
        return autoSetTheme(log)
    } else {
        log.info(`Environment not client's. Setting theme to ${params.darkMode ? "dark" : "light"} based on \`fallbackMode\` parameter`)
        return executeThemeCreation(params.fallbackMode)
    }
}
