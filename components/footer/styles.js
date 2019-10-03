import makeStyles from "@material-ui/core/styles/makeStyles"

import green from "@material-ui/core/colors/green"
import red from "@material-ui/core/colors/red"

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
    return {
        footer: {
            height: theme.mixins.toolbar.minHeight,
            "@media (min-width:600px)": {
                height: theme.mixins.toolbar["@media (min-width:600px)"].minHeight
            },
            [getMediaQueryForMinWidth()]: {
                height: theme.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight
            }
        },
        footerMobile: {
            backgroundColor: theme.palette.background.paper,
            bottom: 0,
            left: 0,
            right: 0,
            position: "fixed"
        },
        lastUpdatedContainer: {
            contentAlign: "middle"
        },
        syncButton: {
            marginLeft: theme.spacing(params.spacing / 2),
            marginRight: theme.spacing(params.spacing / 2),
            marginTop: theme.mixins.toolbar.minHeight / 4,
            "@media (min-width:600px)": {
                marginTop: theme.mixins.toolbar["@media (min-width:600px)"].minHeight / 4
            },
            [getMediaQueryForMinWidth()]: {
                marginTop: theme.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight / 5
            }
        },
        lastUpdated: {
            display: "inline-block",
            marginTop: theme.mixins.toolbar.minHeight / 3,
            textAlign: "center",
            width: "100%",
            "@media (min-width:600px)": {
                marginTop: theme.mixins.toolbar["@media (min-width:600px)"].minHeight / 3
            },
            [getMediaQueryForMinWidth()]: {
                marginTop: theme.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight / 3.75
            }
        },
        submitDiscardButtons: {
            padding: theme.spacing(params.spacing / 2),
            position: "relative",
            top: 0 - theme.spacing(params.spacing),
            "@media (min-width:600px)": {
                top: 0 - theme.spacing(params.spacing) / 1.5
            },
            [getMediaQueryForMinWidth()]: {
                top: 0 - theme.spacing(params.spacing) * 1.5
            },
        },
        saveButton: {
            background: `${green[500]} !important`,
            color: `${theme.palette.common.white} !important`,
            "&:hover": {
                background: `${green[600]} !important`
            }
        },
        discardButton: {
            background: `${red[500]} !important`,
            color: `${theme.palette.common.white} !important`,
            "&:hover": {
                background: `${red[600]} !important`
            }
        }
    }
}

export default makeStyles(styles)
