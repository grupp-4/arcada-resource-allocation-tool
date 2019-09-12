import {isomorphic} from "gillog"

import __app from "next/app"
import Head from "next/head"

import {Fragment} from "react"

import {ThemeProvider} from "@material-ui/styles"

import CssBaseline from "@material-ui/core/CssBaseline"

import PersistentLayout from "components/persistent-layout"

import theme from "theme"

const log = isomorphic.getLogger("_app")

class _app extends __app {

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) jssStyles.parentNode.removeChild(jssStyles)
    }

    render() {
        const {Component, pageProps} = this.props
        return (
            <Fragment>
                <Head>
                    <title>Kursallokering</title>
                </Head>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline/>
                    <PersistentLayout>
                        <Component {...pageProps}/>
                    </PersistentLayout>
                </ThemeProvider>
            </Fragment>
        )
    }
}

export default _app
