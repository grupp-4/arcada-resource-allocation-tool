import {makeStyles} from "@material-ui/core/styles"

function styles(theme) {
    return {
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }
    }
}

export default makeStyles(styles)
