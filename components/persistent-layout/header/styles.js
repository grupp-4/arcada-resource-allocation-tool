import {makeStyles} from "@material-ui/core/styles"

import params from "theme/custom-parameters"

function styles(theme) {
    return {
        container: {
            padding: 0
        },
        appBar: {
            background: params.darkMode && params.darkNavbarInDarkMode ? theme.palette.primary.dark : theme.palette.primary.main,
            marginBottom: theme.spacing(params.spacing)
        },
        toolBarDense: {
            paddingLeft: theme.spacing(params.spacing),
            paddingRight: theme.spacing(params.spacing)
        },
        navigationMenuButton: {
            marginRight: theme.spacing(params.spacing)
        },
        appName: {
            flexGrow: 1
        }
    }
}

export default makeStyles(styles)
