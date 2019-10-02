import {makeStyles} from "@material-ui/core/styles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
        listItem: {
            paddingRight: theme.spacing(params.spacing * 4)
        }
    }
}

export default makeStyles(styles)
