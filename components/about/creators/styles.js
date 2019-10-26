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
        },
        githubLinkContainer: {
            paddingTop: theme.spacing(params.spacing),
            paddingBottom: theme.spacing(params.spacing / 2),
            [`@media (max-width: ${theme.breakpoints.values.md * 1.05}px)`]: {
                paddingTop: theme.spacing(params.spacing),
                paddingBottom: 0
            },
            [theme.breakpoints.down("xs")]: {
                paddingTop: theme.spacing(params.spacing * 2),
                paddingBottom: 0
            }
        },
        githubLinkNoHover: {
            background: theme.palette.action.hover
        }
    }
}

export default makeStyles(styles)
