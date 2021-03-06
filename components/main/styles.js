import Color from "color"

import makeStyles from "@material-ui/core/styles/makeStyles"

import params from "theme/custom-parameters"

function styles(theme) {
    function getMinWidth() {
        // Getting min width value
        const breakpointValues = theme.breakpoints.values
        const breakpointKeys = Object.keys(breakpointValues)
        const key = breakpointKeys[breakpointKeys.indexOf(params.mobileBreakPoint) + 1]
        return breakpointValues[key]
    }
    return {
        container: {
            flexGrow: 1,
            width: "100%",
            maxWidth: theme.breakpoints.values[params.maxWidth],
            marginTop: theme.mixins.toolbar.minHeight + theme.spacing(params.spacing),
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: theme.spacing(params.spacing),
            paddingBottom: theme.spacing(params.spacing),
            paddingRight: theme.spacing(params.spacing),
            "@media (min-width: 600px)": {
                marginTop: theme.mixins.toolbar["@media (min-width:600px)"].minHeight + theme.spacing(params.spacing)
            },
            [`@media (min-width: ${getMinWidth()}px)`]: {
                marginTop: theme.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight + theme.spacing(params.spacing)
            },
            [`@media (min-width: ${getMinWidth()}px) and (min-height: ${params.mainMaxHeight}px)`]: {
                maxHeight: params.mainMaxHeight
            }
        },
        containerMobile: {
            paddingBottom: theme.mixins.toolbar.minHeight,
            [`@media (min-width: ${getMinWidth()}px)`]: {
                paddingBottom: theme.mixins.toolbar["@media (min-width:0px) and (orientation: landscape)"].minHeight
            }
        },
        gridItem: {
            display: "flex",
            flexFlow: "column",
            height: "100%",
            overflow: "hidden"
        },
        paper: {
            display: "flex",
            flexFlow: "column",
            flexGrow: 1,
            overflow: "hidden"
        },
        eventsFeedTab: {
            cursor: "initial"
        },
        eventsFeedTabIndicator: {
            background: "initial"
        },
        tabs: {
            boxShadow: theme.shadows[params.tabBarElevation],
            zIndex: params.tabBarElevation ? theme.zIndex.appBar : "auto"
        },
        tabPanel: {
            background: Color(theme.palette.background.default).darken(params.tabPanelDarkness).hex(),
            flexBasis: 0,
            flexGrow: 1,
            overflow: "auto"
        }
    }
}

export default makeStyles(styles)
