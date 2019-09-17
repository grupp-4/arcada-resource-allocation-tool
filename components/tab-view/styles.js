import Color from "color"

import {makeStyles} from "@material-ui/core/styles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
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
            flexGrow: 1,
            overflow: "auto"
        }
    }
}

export default makeStyles(styles)
