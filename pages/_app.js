import {isomorphic} from "gillog"

import __app from "next/app"

import {ThemeProvider} from "@material-ui/styles"
import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles"

import PersistentLayout from "components/persistent-layout"

// import "styles/global.scss"

const log = isomorphic.getLogger("_app")

class _app extends __app {

    theme = responsiveFontSizes(createMuiTheme())

    render = () => {
        const {Component, pageProps} = this.props
        return (
            <ThemeProvider theme={this.theme}>
                <PersistentLayout>
                    <Component {...pageProps}/>
                </PersistentLayout>
            </ThemeProvider>
        )
    }
}

export default _app
