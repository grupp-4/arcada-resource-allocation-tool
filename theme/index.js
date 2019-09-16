import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles"

import params from "./custom-parameters"

export default responsiveFontSizes(createMuiTheme({
    palette: {
        type: params.type
    }
}))
