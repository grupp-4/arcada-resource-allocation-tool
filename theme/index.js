import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import checkTheme from "utility/checkTheme.js"
import params from "./custom-parameters"


// Creates and exports the Material-UI theme used in the app in one statement
// To customize the theme, modify the object that's given as an argument to createMuiTheme()
// (see https://material-ui.com/customization/theming/#createmuitheme-options-theme for details)
// You can also customize aspects of the responsiveFontSizes function which enhances the theme created by createMuiTheme()
// (see https://material-ui.com/customization/theming/#createmuitheme-options-theme for details)
export default responsiveFontSizes(createMuiTheme({
    palette: {
        type: params.mode
    }
}))
