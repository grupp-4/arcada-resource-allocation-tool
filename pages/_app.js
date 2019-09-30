import {isomorphic} from "gillog"

import fetch from "isomorphic-unfetch"

import __app from "next/app"
import Head from "next/head"

import ThemeProvider from "@material-ui/styles/ThemeProvider"

import CssBaseline from "@material-ui/core/CssBaseline"

import PersistentLayoutController from "components/persistent-layout-controller"
import Header from "../components/header"
import Main from "../components/main"

import processData from "utility/process-data"
import getLandingPagePreferences from "utility/landing-page-preferences"

import createTheme from "theme"
import createStrings from "string-resources"

import "css/make-document-viewport-height.css"

const log = isomorphic.getLogger("_app")

/*
 * Material-UI integration achieved thanks to this example: https://github.com/mui-org/material-ui/tree/master/examples/nextjs 2019-09-13
 */

class _app extends __app {

    // ====== CONSTRUCTOR ======>
    constructor(props) {
        super(props)
        // Getting landing page preferences
        const {landingPage, landingPageMobile} = getLandingPagePreferences()
        this.landingPage = landingPage
        this.landingPageMobile = landingPageMobile
        // Preparing initial state
        const theme = createTheme(log)
        const strings = createStrings(log)
        this.state = {data: null, theme: theme, mobile: true, strings: strings}
    }

    // ====== COMPONENT DID MOUNT ======>
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) jssStyles.parentNode.removeChild(jssStyles)
        // Loading data
        fetch("http://localhost:3000/static/test-data-refactored.json")
            .then(res => res.json())
            .then(data => {
                log.debug("Loaded data (raw):", data)
                const processedData = processData(data)
                log.debug("Loaded data (processed):", processedData)
                this.setState({data: processedData})
            })
    }

    // ====== PERSISTENT LAYOUT CONTROLLER EVENT HANDLERS ======>
    actOnMQ(mobile, initializedPL, setInitializedPL, log) {
        if (initializedPL) {
            this.setState({mobile: mobile})
            log.debug(`Re-rendering layout for: ${mobile ? "mobile" : "desktop"}`)
        } else {
            this.setState({mobile: mobile})
            setInitializedPL(true)
            log.debug(`Initialized persistent layout. Rendering for: ${mobile ? "mobile" : "desktop"}`)
        }
    }
    actOnPCS(theme, dark, light, noPreference, log) {
        if (theme === "auto") {
                let prefersColorScheme = ""
                switch (true) {
                    case dark && !light && !noPreference:
                        prefersColorScheme = "dark"
                        break
                    case !dark && light && !noPreference:
                        prefersColorScheme = "light"
                }
                if (prefersColorScheme && prefersColorScheme !== window._theme) {
                    log.debug(
                        `Intercepted that client's preference of theme has changed to ${prefersColorScheme}.`,
                        `Triggering reevaluation of theme`
                    )
                    this.setState({theme: createTheme(log)})
                }
            }
    }

    // ====== SET STATE -WRAPPERS ======>
    setLang() {
        this.setState({strings: createStrings(log)})
    }
    setTheme() {
        this.setState({theme: createTheme(log)})
    }

    // ====== RENDER ======>
    render() {

        // ====== Preparatory logic ======>
        const {data, theme, mobile, strings} = this.state
        const preferences = {
            theme: this.state.theme.preference,
            landingPage: this.landingPage,
            landingPageMobile: this.landingPageMobile
        }
        const {Component, pageProps} = this.props

        // ====== Actual render ======>
        return (
            <>
                <Head>
                    <title>{strings.global.appName}</title>
                </Head>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline/>
                    <PersistentLayoutController
                        actOnMQ={this.actOnMQ.bind(this)}
                        actOnPCS={this.actOnPCS.bind(this, preferences.theme)}>
                            <Header
                                mobile={mobile}
                                preferences={preferences}
                                setLang={this.setLang.bind(this)}
                                setTheme={this.setTheme.bind(this)}
                                strings={strings.header}/>
                            <Main
                                mobile={mobile}
                                strings={strings.main}
                                footerStrings={strings.footer}>
                                    <Component
                                        landingPage={preferences.landingPage}
                                        landingPageMobile={preferences.landingPageMobile}
                                        data={data}
                                        mobile={mobile}
                                        strings={strings.main}
                                        {...pageProps}/>
                            </Main>
                    </PersistentLayoutController>
                </ThemeProvider>
            </>
        )
    }
}

export default _app
