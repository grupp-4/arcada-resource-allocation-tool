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

function Header({log, appName, mobile, pathname}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const [anchorElement, setAnchorElement] = useState(null)

    // ====== EVENT HANDLERS ======>
    function openMenu() {
        // TODO: implement menu
        log.debug("User tried opening menu which isn't yet implemented.")
    }
    function openPreferences({currentTarget}) {
        log.debug("Opening preferences.")
        setAnchorElement(currentTarget)
    }
    function closePreferences() {
        log.debug("Closing preferences.")
        setAnchorElement(null)
    }

    // ====== RENDER ======>
    return (
        <>
            <AppBar className={styles.appBar} position={"sticky"}>
                <Container className={styles.container} maxWidth={themeParams.maxWidth}>
                    <Toolbar classes={{dense: styles.toolBarDense}} variant={mobile ? "regular" : "dense"}>
                        <IconButton className={styles.menuButton} onClick={openMenu} color={"inherit"} edge={"start"}
                                    aria-label={"menu"} style={{display: mobile ? "initial" : "none"}}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography className={styles.appName} variant={"h6"}>
                            {appName}
                        </Typography>
                        <IconButton onClick={openPreferences} color={"inherit"} size={mobile ? "medium" : "small"} aria-label={"preferences"}>
                            <MoreVertIcon/>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Preferences anchorEl={anchorElement} onClose={closePreferences}/>
        </>
    )
}

Header.propTypes = {
    appName: PropTypes.string.isRequired,
    mobile: PropTypes.bool.isRequired
}

export default withLogging(Header)
