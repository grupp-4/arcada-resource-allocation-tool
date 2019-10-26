import makeStyles from "@material-ui/core/styles/makeStyles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
        powererLink: {
            color: "inherit",
            display: "flex",
            marginLeft: theme.spacing(params.spacing),
            marginRight: theme.spacing(params.spacing),
            width: params.powererWidth,
            "&:visited": {
                color: "inherit"
            },
            [theme.breakpoints.down("xs")]: {
                marginLeft: theme.spacing(params.spacing / 2),
                marginRight: theme.spacing(params.spacing / 2),
                width: params.powererXsWidth,
            },
        },
        powererLogo: {
            width: "100%",
            height: "100%",
            "@media (hover: hover)": {
                transition: theme.transitions.create(["opacity", "filter"]),
                opacity: params.powererOpacity,
                "&:hover": {
                    opacity: 1
                }
            }
        },
        nextJsLogo: {
            "@media (hover: hover)": {
                filter: `opacity(${params.powererExtraOpacity})`,
                "&:hover": {
                    filter: "none",
                }
            }
        },
        muiLogo: {
            "@media (hover: hover)": {
                filter: "grayscale()",
                "&:hover": {
                    filter: "none",
                }
            }
        }
    }
}

export default makeStyles(styles)
