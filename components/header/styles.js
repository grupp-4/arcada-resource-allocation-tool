import makeStyles from "@material-ui/core/styles/makeStyles"

import params from "theme/custom-parameters"

function styles(theme) {
    function getMediaQueryForMinWidth() {
        // Getting max height value
        const breakpointValues = theme.breakpoints.values
        const breakpointKeys = Object.keys(breakpointValues)
        const key = breakpointKeys[breakpointKeys.indexOf(params.mobileBreakPoint) + 1]
        const maxHeight = breakpointValues[key]
        // Return media query string
        return `@media (min-width: ${maxHeight}px)`
    }
    function getMediaQueryForMaxWidth() {
        // Getting max height value
        const breakpointValues = theme.breakpoints.values
        const breakpointKeys = Object.keys(breakpointValues)
        const key = breakpointKeys[breakpointKeys.indexOf(params.mobileBreakPoint) + 1]
        const maxHeight = breakpointValues[key]
        // Return media query string
        return `@media (max-width: ${maxHeight}px)`
    }
    return {
        appBar: {
            background: params.darkMode && params.darkNavbarInDarkMode ? theme.palette.primary.dark : theme.palette.primary.main,
            marginBottom: theme.spacing(params.spacing)
        },
        toolBar: {
            [getMediaQueryForMaxWidth()]: {
                paddingLeft: theme.spacing(params.spacing),
                paddingRight: theme.spacing(params.spacing)
            },
            [getMediaQueryForMinWidth()]: {
                minHeight: theme.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight
            }
        },
        navigationMenuButton: {
            marginRight: theme.spacing(params.spacing)
        },
        appNameContainer: {
            flexGrow: 1
        },
        appNameAnchor: {
            cursor: "pointer"
        },
        preferencesMenuButton: {
            marginRight: 0 - theme.spacing(params.spacing) * 0.75
        }
    }
}

export default makeStyles(styles)
