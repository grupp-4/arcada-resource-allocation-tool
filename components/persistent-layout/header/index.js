import {withLogging} from "gillog"

import PropTypes from "prop-types"

import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography"

import useStyles from "./styles"

function Header({log, appName, mobile, pathname}) {
    const styles = useStyles()
    function openMenu() {
        log.debug("User tried opening menu which isn't yet implemented.")
    }
    return (
        <AppBar className={styles.appBar} position={"static"}>
            <Container className={styles.container} maxWidth={"lg"}>
                <Toolbar classes={{dense: styles.toolBarDense}} variant={mobile ? "regular" : "dense"}>
                    <IconButton className={styles.menuButton} onClick={openMenu} color={"inherit"} edge={"start"}
                                aria-label={"menu"} style={{display: mobile ? "initial" : "none"}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant={"h6"}>
                        {appName}
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

Header.propTypes = {
    appName: PropTypes.string.isRequired,
    mobile: PropTypes.bool.isRequired
}

export default withLogging(Header)
