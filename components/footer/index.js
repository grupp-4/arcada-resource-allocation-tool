import {withLogging} from "gillog"

import {useState} from "react"

import useTheme from "@material-ui/core/styles/useTheme"

import Grid from "@material-ui/core/Grid"
import Zoom from "@material-ui/core/Zoom"
import IconButton from "@material-ui/core/IconButton"
import SyncRoundedIcon from "@material-ui/icons/SyncRounded"
import Typography from "@material-ui/core/Typography"
import Fab from "@material-ui/core/Fab"
import SaveIcon from "@material-ui/icons/Save"
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded"

import Snacky from "components/snacky"

import useStyles from "./styles"

import themeParams from "theme/custom-parameters"

function Footer({log, mobile, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const theme = useTheme()
    const [state, setState] = useState({
        lastUpdated: 0, // TODO: "actually" implement lastUpdated
        changes: true, // TODO: "actually implement change tracker
        snackbar: ""
    })

    // ====== EVENT HANDLERS ======>
    function submitChanges() {
        // TODO: implement submitting changes
        log.warn("User tried to submit changes, a feature which isn't yet implemented.")
        // TODO: get snackbar working
        /*log.info("Submitting changes")
        setState(prevState => ({
            ...prevState,
            snackbar: (
                <Snacky
                    resetState={() => setState({...state, snackbar: ""})}
                    message="Saved changes"/>
            )
        }))*/
    }
    function discardChanges() {
        // TODO: implement discarding changes
        log.warn("User tried to discard changes, a feature which isn't yet implemented.")
        // TODO: get snackbar working
        /*log.info("Discarding changes")
        setState(prevState => ({
            ...prevState,
            snackbar: (
                <Snacky
                    resetState={() => setState({...state, snackbar: ""})}
                    message="Discarded changes"/>
            )
        }))*/
    }
    function syncData() {
        // TODO: implement syncing data
        log.warn("User tried to synchronize data, a feature which isn't yet implemented.")
        // TODO: get snackbar working
        /*log.info("Syncing data")
        setState(prevState => ({
            ...prevState,
            snackbar: (
                <Snacky
                    resetState={() => setState({...state, snackbar: ""})}
                    message="Sync complete"/>
            )
        }))*/
    }

    // ====== "SUB" COMPONENTS ======>
    function ConditionalFloatingActionButton({condition, children, ...props}) {
        // ====== INITIAL LOGIC ======>
        const transitionTimes = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
        }
        const transitionDelay = `${condition ? transitionTimes.exit : 0}ms`
        // ====== RENDER ======>
        return (
            <Zoom
                in={condition}
                timeout={transitionTimes}
                style={{transitionDelay}}
                unmountOnExit>
                    <Fab {...props}>
                        {children}
                    </Fab>
            </Zoom>
        )
    }

    // ====== RENDER ======>
    return (
        <Grid
            className={`${styles.footer} ${mobile ? styles.footerMobile : null}`} container>
            <Grid item xs={!mobile}>
                <IconButton
                    className={styles.syncButton}
                    onClick={syncData}
                    size={"small"}
                    aria-label={"sync"}>
                        <SyncRoundedIcon/>
                </IconButton>
            </Grid>
            <Grid className={styles.lastUpdatedContainer} item xs={!mobile}>
                <Typography className={styles.lastUpdated} variant={"caption"}>
                    <b>{strings.lastUpdated}</b>
                    {state.lastUpdated
                        ? ` ${state.lastUpdated} ${strings.minutesAgo}`
                        : ` ${strings.rightNow}`}
                </Typography>
            </Grid>
            <Grid
                className={styles.submitDiscardButtons}
                container
                direction={"row-reverse"}
                item
                spacing={themeParams.spacing / 2}
                xs>
                    <Grid item>
                        <ConditionalFloatingActionButton
                            className={styles.saveButton}
                            onClick={submitChanges}
                            condition={state.changes}
                            color={"inherit"}
                            aria-label={"save"}>
                                <SaveIcon/>
                        </ConditionalFloatingActionButton>
                    </Grid>
                    <Grid item>
                        <ConditionalFloatingActionButton
                            className={styles.discardButton}
                            onClick={discardChanges}
                            condition={state.changes}
                            color={"inherit"}
                            aria-label={"discard"}>
                                <DeleteRoundedIcon/>
                        </ConditionalFloatingActionButton>
                    </Grid>
            </Grid>
            {state.snackbar}
        </Grid>
    )
}

export default withLogging(Footer)
