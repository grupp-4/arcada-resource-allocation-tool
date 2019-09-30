import {withLogging} from "gillog"

import {useState, useEffect} from "react"

import useTheme from "@material-ui/core/styles/useTheme"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import themeParams from "theme/custom-parameters"

function PersistentLayoutController({log, actOnMQ, actOnPCS, children}) {

    // ====== HOOKS ======>

    const theme = useTheme()

    const mobile = useMediaQuery(theme.breakpoints.down(themeParams.mobileBreakPoint), {defaultMatches: true})

    const prefersColorSchemeDark = useMediaQuery("(prefers-color-scheme: dark)")
    const prefersColorSchemeLight = useMediaQuery("(prefers-color-scheme: light)")
    const prefersColorSchemeNoPreference = useMediaQuery("(prefers-color-scheme: no-preference)")

    const [initializedPL, setInitializedPL] = useState(false)

    useEffect(() => {
        actOnMQ(
            mobile,
            initializedPL,
            setInitializedPL,
            log
        )
    }, [mobile])

    useEffect(() => {
        actOnPCS(
            prefersColorSchemeDark,
            prefersColorSchemeLight,
            prefersColorSchemeNoPreference,
            log
        )
    }, [
        prefersColorSchemeDark,
        prefersColorSchemeLight,
        prefersColorSchemeNoPreference
    ])

    // ====== RENDER ======>

    return children
}

export default withLogging(PersistentLayoutController)
