import {withLogging} from "gillog"

import PropTypes from "prop-types"

import {useState, useEffect} from "react"

import {useRouter} from "next/router"

import {useTheme} from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import Header from "./header"
import Main from "./main"

import themeParams from "theme/custom-parameters"

function PersistentLayout({log, appName, preferences, setTheme, setLandingPage, strings, children}) {

    // ====== HOOKS ======>

    const theme = useTheme()

    const mobile = useMediaQuery(theme.breakpoints.down(themeParams.mobileBreakPoint))

    const [initializedPL, setInitializedPL] = useState(false)

    useEffect(() => {
        if (initializedPL) {
            setLandingPage(mobile)
            log.debug(`Re-rendering layout for: ${mobile ? "mobile" : "desktop"}`)
        } else {
            setLandingPage(mobile)
            setInitializedPL(true)
            log.debug(`Initialized persistent layout. Rendering for: ${mobile ? "mobile" : "desktop"}`)
        }
    }, [mobile])

    const router = useRouter()

    // ====== MISC. LOGIC ======>

    const pathname = router.pathname.slice(1)

    // ====== RENDER ======>

    return (
        <>
            <Header appName={appName} preferences={preferences} setTheme={setTheme} mobile={mobile} pathname={pathname} strings={strings.header}/>
            <Main mobile={mobile} pathname={pathname} strings={strings.main}>{children}</Main>
        </>
    )
}

PersistentLayout.propTypes = {
    appName: PropTypes.string.isRequired
}

export default withLogging(PersistentLayout)
