import {isomorphic} from "gillog"

import __app from "next/app"
import Head from "next/head"

import {ThemeProvider} from "@material-ui/styles"

import CssBaseline from "@material-ui/core/CssBaseline"

import PersistentLayout from "components/persistent-layout"

import theme from "theme"

import "css/make-document-viewport-height.css"

const log = isomorphic.getLogger("_app")

/**
 * Material-UI integration achieved thanks to this example: https://github.com/mui-org/material-ui/tree/master/examples/nextjs 2019-09-13
 */

class _app extends __app {

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) jssStyles.parentNode.removeChild(jssStyles)
    }

    render() {
        const appName = "Resursallokering" // TODO: make a real implementation for the app's name/page title
        const {Component, pageProps} = this.props
        return (
            <>
                <Head>
                    <title>{appName}</title>
                </Head>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline/>
                    <PersistentLayout appName={appName}>
                        <Component {...pageProps}/>
                    </PersistentLayout>
                </ThemeProvider>
            </>
        )
    }
}

export default _app
