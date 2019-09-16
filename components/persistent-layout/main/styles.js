import {makeStyles} from "@material-ui/core/styles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
        container: {
            flexGrow: 1,
            maxHeight: params.mainMaxHeight,
            paddingLeft: theme.spacing(params.spacing),
            paddingRight: theme.spacing(params.spacing)
        },
        main: {
            height: "100%"
        },
        gridContainer: {
            height: "100%"
        },
        paper: {
            height: "100%"
        }
    }
}

export default makeStyles(styles)
