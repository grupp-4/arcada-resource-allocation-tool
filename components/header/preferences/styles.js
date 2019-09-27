import {makeStyles} from "@material-ui/core/styles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
        menuItem: {
            outline: "none"
        },
        menuFieldset: {
            flexGrow: 1
        },
        menuLegend: {
            color: theme.palette.text.primary,
            display: "flex"
        },
        menuLegendDesktop: {
            alignItems: "baseline",
            justifyContent: "space-between",
            width: "100%"
        },
        menuLegendMobile: {
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
        },
        menuLegendFocused: {
            color: `${theme.palette.text.primary} !important`
        },
        menuLegendSpan: {
            paddingBottom: theme.spacing(1 / 2)
        },
        menuHelperText: {
            color: theme.palette.text.primary
        }
    }
}

export default makeStyles(styles)
