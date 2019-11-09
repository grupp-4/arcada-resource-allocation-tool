import makeStyles from "@material-ui/core/styles/makeStyles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
        feature: {
            "& svg": {
                alignSelf: "center",
                fontSize: params.featureIconFontSize,
                margin: theme.spacing(params.spacing)
            }
        }
    }
}

export default makeStyles(styles)
