import {makeStyles} from "@material-ui/core/styles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
        container: {
            flexGrow: 1,
            paddingLeft: theme.spacing(params.spacing),
            paddingRight: theme.spacing(params.spacing)
        },
        main: {
            height: "100%",
            [theme.breakpoints.up('md')]: {
                maxHeight: theme.breakpoints.values.md
            }
        },
        gridContainer: {
            height: "100%"
        },
        gridItem: {
            display: "flex",
            flexFlow: "column",
            height: "100%"
        },
        paper: {
            display: "flex",
            flexFlow: "column",
            flexGrow: 1,
            overflow: "hidden"
        }
    }
}

export default makeStyles(styles)
