import __app from "next/app"

import {StylesProvider} from "@material-ui/styles"

import "styles/global.scss"

class _app extends __app {
    render() {
        const {Component, pageProps} = this.props
        return <StylesProvider injectFirst>
            <Component {...pageProps} />
        </StylesProvider>
    }
}

export default _app
