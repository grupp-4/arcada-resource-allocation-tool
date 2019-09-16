import {withLogging} from "gillog"

import PropTypes from "prop-types"

import {useState, useEffect} from "react"

import {useRouter} from "next/router"

import {useTheme} from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import Header from "./header"
import Main from "./main"

import themeParams from "theme/custom-parameters"

function PersistentLayout({log, appName, children}) {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down(themeParams.mobileBreakPoint))
    const [initializedPL, setInitializedPL] = useState(false)
    useEffect(() => {
        if (initializedPL) {
            log.debug(`Re-rendering layout for: ${mobile ? "mobile" : "desktop"}`)
        } else {
            log.debug(`Initialized persistent layout. Rendering for: ${mobile ? "mobile" : "desktop"}`)
            setInitializedPL(true)
        }
    }, [mobile])
    const router = useRouter()
    const pathname = router.pathname.slice(1)
    return (
        <>
            <Header appName={appName} mobile={mobile} pathname={pathname}/>
            <Main mobile={mobile} pathname={pathname}>{children}</Main>
        </>
    )
}

PersistentLayout.propTypes = {
    appName: PropTypes.string.isRequired
}

export default withLogging(PersistentLayout)
