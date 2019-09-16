import {makeStyles} from "@material-ui/core/styles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
        container: {
            height: "100%",
            maxHeight: params.mainMaxHeight,
            paddingBottom: theme.spacing(params.spacing),
            paddingLeft: theme.spacing(params.spacing),
            paddingRight: theme.spacing(params.spacing)
        },
        main: {
            height: "inherit",
        },
        gridContainer: {
            height: "inherit"
        },
        paper: {
            height: "100%"
        }
    }
}

export default makeStyles(styles)
