import makeStyles from "@material-ui/core/styles/makeStyles"

import params from "theme/custom-parameters"

function styles(theme) {
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
        container: {
            background: theme.palette.background.paper,
        },
        footer: {
            alignItems: "flex-end",
            margin: "auto",
            maxWidth: theme.breakpoints.values[params.maxWidth],
            paddingTop: theme.spacing(params.spacing * 2),
            paddingLeft: theme.spacing(params.spacing * 1.5),
            paddingBottom: theme.spacing(params.spacing * 2),
            paddingRight: theme.spacing(params.spacing * 1.5),
            [getMediaQueryForMaxWidth()]: {
                paddingLeft: theme.spacing(params.spacing),
                paddingRight: theme.spacing(params.spacing)
            },
            [theme.breakpoints.down("xs")]: {
                flexDirection: "column",
                alignItems: "flex-start"
            }
        },
        list: {
            width: "initial"
        },
        listItem: {
            padding: 0
        },
        buttonWithMargin: {
            marginTop: theme.spacing(params.spacing / 2),
        },
        link: {
            "&:hover": {
                color: theme.palette.primary.main
            }
        },
        cplcNotice: {
            textAlign: "right",
            [theme.breakpoints.down("xs")]: {
                marginTop: theme.spacing(params.spacing),
                textAlign: "left"
            }
        }
    }
}

export default makeStyles(styles)
