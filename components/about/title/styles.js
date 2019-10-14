import makeStyles from "@material-ui/core/styles/makeStyles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
        titleContainer: {
            [`@media (max-width: ${theme.breakpoints.values.md * 1.05}px)`]: {
                marginBottom: theme.spacing(params.spacing)
            },
            [theme.breakpoints.down("sm")]: {
                marginBottom: theme.spacing(params.spacing * 2)
            }
        },
        arcadaLogoContainer: {
            color: "inherit",
            paddingRight: theme.spacing(params.spacing),
            "&:visited": {
                color: "inherit"
            },
            "&:hover": {
                color: theme.palette.primary.main
            },
            [theme.breakpoints.down("xs")]: {
                paddingRight: theme.spacing(params.spacing / 2)
            }
        },
        arcadaLogo: {
            width: "100%",
            height: "100%"
        },
        appTitle: {
            borderLeft: `thin solid ${theme.palette.text.primary}`,
            alignItems: "center",
            display: "flex",
            paddingLeft: theme.spacing(params.spacing),
            [`@media (max-width: ${theme.breakpoints.values.md * 1.05}px)`]: {
                flexBasis: 0
            },
            [theme.breakpoints.down("xs")]: {
                paddingLeft: theme.spacing(params.spacing / 2)
            },
            [`@media (max-width: ${theme.breakpoints.values.sm / 1.5}px)`]: {
                fontSize: "2rem"
            }
        }
    }
}

export default makeStyles(styles)
