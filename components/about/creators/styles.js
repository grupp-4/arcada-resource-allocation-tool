import makeStyles from "@material-ui/core/styles/makeStyles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
        container: {
            marginBottom: theme.spacing(params.spacing / 2),
            [`@media (max-width: ${theme.breakpoints.values.md * 1.05}px)`]: {
                marginBottom: theme.spacing(params.spacing)
            },
            [theme.breakpoints.down("xs")]: {
                marginBottom: theme.spacing(params.spacing * 2)
            }
        },
        creatorLink: {
            "&:hover": {
                color: theme.palette.primary.main
            }
        }
    }
}

export default makeStyles(styles)
