import {withLogging} from "gillog"

import {useState} from "react"

import Link from "next/link"

import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography"
import TranslateRoundedIcon from "@material-ui/icons/TranslateRounded"
import MoreVertIcon from "@material-ui/icons/MoreVert"

import Navigation from "./navigation"
import Languages from "./languages"
import Preferences from "./preferences"

import useStyles from "./styles"

import themeParams from "theme/custom-parameters"

function Header({log, preferences, setLang, setTheme, mobile, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const [{navOpen, langAnchor, prefAnchor}, setState] = useState({langAnchor: null, prefAnchor: null})

    // ====== EVENT HANDLERS ======>
    function openNavigationMenu() {
        setState(prevState => ({...prevState, navOpen: true}))
        log.info("Opening navigation menu")
    }
    function closeNavigationMenu(event) {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return
        setState(prevState => ({...prevState, navOpen: false}))
        log.info("Closing navigation menu")
    }
    function openLanguagesMenu({currentTarget}) {
        setState(prevState => ({...prevState, langAnchor: currentTarget}))
        log.info("Opening languages menu")
    }
    function closeLanguagesMenu() {
        setState(prevState => ({...prevState, langAnchor: null}))
        log.info("Closing languages menu")
    }
    function openPreferencesMenu({currentTarget}) {
        setState(prevState => ({...prevState, prefAnchor: currentTarget}))
        log.info("Opening preferences menu")
    }
    function closePreferencesMenu() {
        setState(prevState => ({...prevState, prefAnchor: null}))
        log.info("Closing preferences menu")
    }

    // ====== RENDER ======>
    return (
        <>
            <AppBar className={styles.appBar} position={"fixed"}>
                <Container className={styles.container} maxWidth={themeParams.maxWidth}>
                    <Toolbar classes={{dense: styles.toolBarDense}} variant={mobile ? "regular" : "dense"}>
                        <IconButton
                            className={styles.navigationMenuButton}
                            onClick={openNavigationMenu}
                            color={"inherit"}
                            edge={"start"}
                            aria-controls={"navigation-menu"}
                            aria-haspopup={"true"}
                            aria-label={"navigation"}
                            style={{display: mobile ? "initial" : "none"}}>
                                <MenuIcon/>
                        </IconButton>
                        <Link href={{pathname: "/"}} passHref replace shallow>
                            <Typography className={styles.appNameContainer} variant={"h6"}>
                                <a className={styles.appNameAnchor}>{strings.appName}</a>
                            </Typography>
                        </Link>
                        <IconButton
                            onClick={openLanguagesMenu}
                            color={"inherit"}
                            size={mobile ? "medium" : "small"}
                            aria-controls={"languages-menu"}
                            aria-haspopup={"true"}
                            aria-label={"languages"}>
                                <TranslateRoundedIcon/>
                        </IconButton>
                        <IconButton
                            onClick={openPreferencesMenu}
                            color={"inherit"}
                            size={mobile ? "medium" : "small"}
                            aria-controls={"preferences-menu"}
                            aria-haspopup={"true"}
                            aria-label={"preferences"}>
                                <MoreVertIcon/>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Navigation
                open={navOpen}
                onClose={closeNavigationMenu}
                landingPage={preferences.landingPageMobile}
                strings={strings.navigationMenu}/>
            <Languages
                anchorEl={langAnchor}
                onClose={closeLanguagesMenu}
                setLang={setLang}/>
            <Preferences
                anchorEl={prefAnchor}
                onClose={closePreferencesMenu}
                preferences={preferences}
                setTheme={setTheme}
                mobile={mobile}
                strings={strings.preferencesMenu}/>
        </>
    )
}

export default withLogging(Header)
