import Color from "color"

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
        footer: {
            height: theme.mixins.toolbar.minHeight,
            [getMediaQueryForMinWidth()]: {
                height: theme.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight
            }
        },
        footerMobile: {
            background: Color(theme.palette.background.paper).alpha(params.footerMobileOpacity).rgb().string(),
            backdropFilter: `blur(${params.footerMobileBlurIntensity}px)`,
            boxShadow: theme.shadows[params.footerMobileElevation],
            bottom: 0,
            left: 0,
            right: 0,
            position: "fixed"
        },
        lastUpdatedContainer: {
            overflow: "visible"
        },
        syncButton: {
            marginLeft: theme.spacing(params.spacing / 2),
            marginRight: theme.spacing(params.spacing / 2),
            marginTop: theme.mixins.toolbar.minHeight / 4,
            [getMediaQueryForMinWidth()]: {
                marginTop: theme.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight / 5
            }
        },
        spin: {
            animation: "1s linear $spin"
        },
        spinPaused: {
            animationIterationCount: 0
        },
        spinPlaying: {
            animationIterationCount: "infinite"
        },
        "@keyframes spin": {
            from: {
                transform: "none"
            },
            to: {
                transform: "rotate(-360deg)"
            }
        },
        lastUpdated: {
            display: "inline-block",
            marginTop: theme.mixins.toolbar.minHeight / 3,
            textAlign: "center",
            width: "100%",
            [getMediaQueryForMinWidth()]: {
                marginTop: theme.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight / 3.75
            }
        },
        submitDiscardButtons: {
            padding: theme.spacing(params.spacing / 2),
            position: "relative",
            top: 0 - theme.spacing(params.spacing),
            [getMediaQueryForMinWidth()]: {
                padding: theme.spacing(params.spacing / 2),
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
        },
        snackbar: {
            left: theme.spacing(params.spacing / 2),
            bottom: theme.spacing(params.spacing / 2),
            [getMediaQueryForMaxWidth()]: {
                paddingBottom: theme.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight + theme.spacing(params.spacing / 2)
            }
        },
        snackbarExtraPadding: {
            [theme.breakpoints.down("xs")]: {
                paddingBottom: theme.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight + theme.spacing(params.spacing)
            }
        },
        snackbarContent: {
            [theme.breakpoints.up("xs")]: {
                minWidth: "initial"
            }
        },
        snackbarUndoButton: {
            color: red[500]
        },
        snackbarCloseButton: {
            padding: theme.spacing(params.spacing / 4)
        }
    }
}

export default makeStyles(styles)
