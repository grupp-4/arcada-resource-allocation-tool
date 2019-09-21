import {withLogging} from "gillog"

import PropTypes from "prop-types"

import {useState} from "react"

import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography"
import MoreVertIcon from "@material-ui/icons/MoreVert"

import Preferences from "./preferences"

import useStyles from "./styles"

import themeParams from "theme/custom-parameters"

function Header({log, appName, mobile, pathname, strings}) {

    // ====== HOOKS ======>

    const styles = useStyles()
    const [anchorElement, setAnchorElement] = useState(null)

    // ====== EVENT HANDLERS ======>

    function openNavigationMenu() {
        // TODO: implement menu
        log.debug("User tried opening menu which isn't yet implemented.")
    }
    function openPreferencesMenu({currentTarget}) {
        log.debug("Opening preferences.")
        setAnchorElement(currentTarget)
    }
    function closePreferencesMenu() {
        log.debug("Closing preferences.")
        setAnchorElement(null)
    }

    // ====== RENDER ======>

    return (
        <>
            <AppBar className={styles.appBar} position={"sticky"}>
                <Container className={styles.container} maxWidth={themeParams.maxWidth}>
                    <Toolbar classes={{dense: styles.toolBarDense}} variant={mobile ? "regular" : "dense"}>
                        <IconButton className={styles.navigationMenuButton} onClick={openNavigationMenu} color={"inherit"} edge={"start"}
                                    aria-controls={"navigation-menu"} aria-haspopup={"true"} aria-label={"navigation"} style={{display: mobile ? "initial" : "none"}}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography className={styles.appName} variant={"h6"}>
                            {appName}
                        </Typography>
                        <IconButton onClick={openPreferencesMenu} color={"inherit"} size={mobile ? "medium" : "small"}
                                    aria-controls={"preferences-menu"} aria-haspopup={"true"} aria-label={"preferences"}>
                            <MoreVertIcon/>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Preferences anchorEl={anchorElement} onClose={closePreferencesMenu} strings={strings.preferencesMenu}/>
        </>
    )
}

Header.propTypes = {
    appName: PropTypes.string.isRequired,
    mobile: PropTypes.bool.isRequired
}

export default withLogging(Header)
