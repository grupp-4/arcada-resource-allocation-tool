import Color from "color"

import makeStyles from "@material-ui/core/styles/makeStyles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
        container: {
            paddingBottom: theme.spacing(params.spacing)
        },
        gridMobile: {
            padding: theme.spacing(params.spacing)
        },
        gridDesktop: {
            marginTop: theme.spacing(0 - params.spacing)
        },
        headingMobile: {
            display: "inline-block",
            marginRight: theme.spacing(params.spacing / 2)
        },
        subGrid: {
            padding: theme.spacing(params.spacing)
        }
    }
}

export default makeStyles(styles)
