import {withLogging} from "gillog"

import PropTypes from "prop-types"

import {useState, useEffect} from "react"

import {useRouter} from "next/router"

import {useTheme} from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import Header from "./header"
import Main from "./main"

import themeParams from "theme/custom-parameters"

function PersistentLayout({log, appName, preferences, setMobile, setStrings, setTheme, strings, children}) {

    // ====== HOOKS ======>

    const theme = useTheme()

    const mobile = useMediaQuery(theme.breakpoints.down(themeParams.mobileBreakPoint))

    const prefersColorSchemeDark = useMediaQuery("(prefers-color-scheme: dark)")
    const prefersColorSchemeLight = useMediaQuery("(prefers-color-scheme: light)")
    const prefersColorSchemeNoPreference = useMediaQuery("(prefers-color-scheme: no-preference)")

    const [{initializedPL, initializedPCS}, setState] = useState({initializedPL: false, initializedPCS: false})

    useEffect(() => {
        if (initializedPL) {
            setMobile(mobile)
            log.debug(`Re-rendering layout for: ${mobile ? "mobile" : "desktop"}`)
        } else {
            setMobile(mobile)
            setState(prevState => ({...prevState, ...{initializedPL: true}}))
            log.debug(`Initialized persistent layout. Rendering for: ${mobile ? "mobile" : "desktop"}`)
        }
    }, [mobile])

    useEffect(() => {
        if (preferences.theme === "auto") {
            let prefersColorScheme = ""
            switch (true) {
                case prefersColorSchemeDark && !prefersColorSchemeLight && !prefersColorSchemeNoPreference:
                    prefersColorScheme = "dark"
                    break
                case !prefersColorSchemeDark && prefersColorSchemeLight && !prefersColorSchemeNoPreference:
                    prefersColorScheme = "light"
            }
            if (prefersColorScheme && prefersColorScheme !== window._theme) {
                log.debug(
                    `Intercepted that client's preference of theme has changed to ${prefersColorScheme}.`,
                    `Triggering reevaluation of theme`
                )
                setTheme()
            }
        }
    }, [
        prefersColorSchemeDark,
        prefersColorSchemeLight,
        prefersColorSchemeNoPreference
    ])

    const router = useRouter()

    // ====== MISC. LOGIC ======>

    const pathname = router.pathname.slice(1)

    // ====== RENDER ======>

    return (
        <>
            <Header
                appName={appName}
                preferences={preferences}
                setStrings={setStrings}
                setTheme={setTheme}
                mobile={mobile}
                pathname={pathname}
                strings={strings.header}/>
            <Main
                mobile={mobile}
                pathname={pathname}
                strings={strings.main}>
                    {children}
            </Main>
        </>
    )
}

PersistentLayout.propTypes = {
    appName: PropTypes.string.isRequired
}

export default withLogging(PersistentLayout)
