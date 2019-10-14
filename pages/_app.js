import {isomorphic} from "gillog"

import fetch from "isomorphic-unfetch"

import __app from "next/app"
import Head from "next/head"

import ThemeProvider from "@material-ui/styles/ThemeProvider"

import CssBaseline from "@material-ui/core/CssBaseline"

import PersistentLayoutController from "components/persistent-layout-controller"
import Header from "components/header"
import Main from "components/main"
import Footer from "components/footer"

import initIDB from "utility/idb"
import drop from "utility/idb/drop"
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
        this.state = {
            cs: null,
            rc: null,
            wc: null,
            modifications: null,
            theme: theme,
            mobile: true,
            strings: strings
        }
    }

    // ====== COMPONENT DID MOUNT ======>
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) jssStyles.parentNode.removeChild(jssStyles)
        // Dropping databases (just during development, when databases are changed a lot)
        drop()
            .then(() => {
                log.debug("Successfully dropped all databases")
                // Loading data
                return fetch(process.env.DATA_URL)
            })
            .then(res => {
                // Parsing response body as JSON (which is asynchronous, for some reason)
                return res.json()
            })
            .then(data => {
                log.debug("Loaded data (raw):", data)
                // Processing data
                return processData(data)
            })
            .then(processedData => {
                // If processing data failed (`processedData` is undefined), throw error
                if(!processedData) throw new Error("processData failed. See above error for more details.")
                log.debug("Loaded data (processed):", processedData)
                // Initializing IDB
                return initIDB(processedData)
            })
            .then(([cs, rc, wc]) => {
                // Getting all data from working copy
                this.setState({cs, rc, wc, modifications: []})
            })
            .catch(error => log.error(error.stack))
    }

    // ====== PERSISTENT LAYOUT CONTROLLER EVENT HANDLERS ======>
    actOnMQ(mobile, initializedPL, setInitializedPL, log) {
        if (initializedPL) {
            this.setState({mobile: mobile})
            log.info(`Re-rendering layout for: ${mobile ? "mobile" : "desktop"}`)
        } else {
            this.setState({mobile: mobile})
            setInitializedPL(true)
            log.info(`Initialized persistent layout. Rendering for: ${mobile ? "mobile" : "desktop"}`)
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
                    log.info(
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
        const {
            cs,
            rc,
            wc,
            modifications,
            theme,
            mobile,
            strings
        } = this.state
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
                                cs={cs}
                                mobile={mobile}
                                strings={strings.main}>
                                    <Component
                                        landingPage={preferences.landingPage}
                                        landingPageMobile={preferences.landingPageMobile}
                                        cs={cs}
                                        wc={wc}
                                        mobile={mobile}
                                        strings={strings.main}
                                        {...pageProps}/>
                                    <Footer
                                        getLatestTimestamp={cs ? cs.getLatestTimestamp : null}
                                        modifications={modifications}
                                        mobile={mobile}
                                        strings={strings.footer}/>
                            </Main>
                    </PersistentLayoutController>
                </ThemeProvider>
            </>
        )
    }
}

export default _app
