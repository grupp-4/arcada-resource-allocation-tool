import makeStyles from "@material-ui/core/styles/makeStyles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
        creatorLink: {
            "&:hover": {
                color: theme.palette.primary.main
            }
        }
    }
}

export default makeStyles(styles)
