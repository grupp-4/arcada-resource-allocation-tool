import {makeStyles} from "@material-ui/core/styles"

function styles(theme) {
    return {
        appBar: {
            background: theme.palette.primary.dark
        },
        menuButton: {
            marginRight: theme.spacing(2)
        }
    }
}

export default makeStyles(styles)
