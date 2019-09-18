import {makeStyles} from "@material-ui/core/styles"

import params from "theme/custom-parameters"

function styles(theme) {
    function getMediaQueryForMaxHeight() {
        // Getting max height value
        const breakpointValues = theme.breakpoints.values
        const breakpointKeys = Object.keys(breakpointValues)
        const key = breakpointKeys[breakpointKeys.indexOf(params.mobileBreakPoint) + 1]
        const maxHeight = breakpointValues[key]
        // Return media query string
        return `@media (min-width: ${maxHeight}px) and (min-height: ${params.mainMaxHeight}px)`
    }
    return {
        container: {
            flexGrow: 1,
            paddingLeft: theme.spacing(params.spacing),
            paddingRight: theme.spacing(params.spacing)
        },
        main: {
            height: "100%",
            [getMediaQueryForMaxHeight()]: {
                maxHeight: params.mainMaxHeight
            }
        },
        gridContainer: {
            height: "100%"
        },
        gridItem: {
            display: "flex",
            flexFlow: "column",
            height: "100%"
        },
        paper: {
            display: "flex",
            flexFlow: "column",
            flexGrow: 1,
            overflow: "hidden"
        }
    }
}

export default makeStyles(styles)
