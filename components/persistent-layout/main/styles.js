import {makeStyles} from "@material-ui/core/styles"

function styles(theme) {
    return {
        container: {
            height: "100%",
            maxHeight: "80rem",
            paddingBottom: theme.spacing(2),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
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
