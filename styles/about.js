import makeStyles from "@material-ui/core/styles/makeStyles"

import params from "../theme/custom-parameters"

function styles(theme) {
    function getMinWidth() {
        // Getting min width value
        const breakpointValues = theme.breakpoints.values
        const breakpointKeys = Object.keys(breakpointValues)
        const key = breakpointKeys[breakpointKeys.indexOf(params.mobileBreakPoint) + 1]
        return breakpointValues[key]
    }
    return {
        pageFold: {
            height: "inherit",
            paddingTop: theme.mixins.toolbar.minHeight + theme.spacing(params.spacing),
            paddingRight: theme.spacing(params.spacing),
            paddingLeft: theme.spacing(params.spacing),
            "@media (min-width: 600px)": {
                paddingTop: theme.mixins.toolbar["@media (min-width:600px)"].minHeight + theme.spacing(params.spacing)
            },
            [`@media (min-width: ${getMinWidth()}px)`]: {
                paddingTop: theme.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight + theme.spacing(params.spacing)
            }
        },
        marginBottom: {
            marginBottom: theme.spacing(params.spacing * 4)
        }
    }
}

// Exporting the hook that the makeStyles function returns
export default makeStyles(styles)
