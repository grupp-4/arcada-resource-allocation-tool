import makeStyles from "@material-ui/core/styles/makeStyles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
        arcadaLogoContainer: {
            padding: theme.spacing(params.spacing)
        },
        arcadaLogo: {
            width: "100%",
            height: "100%"
        },
        appTitle: {
            borderLeft: `thin solid ${theme.palette.text.primary}`,
            alignItems: "center",
            display: "flex",
            padding: theme.spacing(params.spacing)
        }
    }
}

export default makeStyles(styles)
