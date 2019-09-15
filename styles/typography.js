import {makeStyles} from "@material-ui/core/styles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
        typography: {
            padding: theme.spacing(params.spacing),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }
    }
}

export default makeStyles(styles)
