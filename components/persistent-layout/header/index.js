import {withLogging} from "gillog"

import PropTypes from "prop-types"

import {useState} from "react"

import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography"

import Drawer from "./drawer"

import useStyles from "./styles"

import themeParams from "theme/custom-parameters"

function Header({log, appName, mobile, pathname}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const [open, toggleDrawer] = useState(false)

    // ====== EVENT HANDLERS ======>
    function openDrawer() {
        toggleDrawer(() => true)
        log.debug("Opened drawer")
    }

    // ====== FUNCTIONS ======>
    function closeDrawer() {
        toggleDrawer(() => false)
        log.debug("Closed drawer")
    }

    // ====== RENDER ======>
    return (
        <>
            <AppBar className={styles.appBar} position={"sticky"}>
                <Container className={styles.container} maxWidth={themeParams.maxWidth}>
                    <Toolbar classes={{dense: styles.toolBarDense}} variant={mobile ? "regular" : "dense"}>
                        <IconButton className={styles.menuButton} onClick={openDrawer} color={"inherit"} edge={"start"}
                                    aria-label={"menu"} style={{display: mobile ? "initial" : "none"}}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant={"h6"}>
                            {appName}
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer open={open} closeDrawer={closeDrawer}/>
        </>
    )
}

Header.propTypes = {
    appName: PropTypes.string.isRequired,
    mobile: PropTypes.bool.isRequired
}

export default withLogging(Header)
