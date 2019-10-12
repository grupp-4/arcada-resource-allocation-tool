import makeStyles from "@material-ui/core/styles/makeStyles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
        circularProgress: {
            marginTop: theme.spacing(params.spacing * 2),
            textAlign: "center"
        }
    }
}

export default makeStyles(styles)
