import {withLogging} from "gillog"

import {useState, useEffect, useMemo} from "react"

import useTheme from "@material-ui/core/styles/useTheme"

import Grid from "@material-ui/core/Grid"
import Zoom from "@material-ui/core/Zoom"
import IconButton from "@material-ui/core/IconButton"
import SyncRoundedIcon from "@material-ui/icons/SyncRounded"
import Typography from "@material-ui/core/Typography"
import Fab from "@material-ui/core/Fab"
import SaveIcon from "@material-ui/icons/Save"
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded"
import Snackbar from "@material-ui/core/Snackbar"
import Button from "@material-ui/core/Button"
import CloseIcon from "@material-ui/icons/Close"

import useStyles from "./styles"

import themeParams from "theme/custom-parameters"

function Footer({log, getLatestTimestamp, modifications, mobile, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const theme = useTheme()
    const [state, setState] = useState({
        latestTimestamp: null,
        modifications: "syncing",
        snackbar: ""
    })
    useEffect(() => {
        if (getLatestTimestamp) {
            getLatestTimestamp()
                .then(latestTimestamp => setState(prevState => ({...prevState, latestTimestamp})))
                .catch(error => log.error(error.stack))
        }
    }, [getLatestTimestamp])
    useEffect(() => {
        if (modifications) {
            // TODO: change `modifications.length ? "true" : "true"` to `"true" : "false"` (keep reading below)
            // Once all the surrounding systems are in place, showing/hiding the submit and discard buttons
            // will be handled in entirety by this hook, except for when the user has clicked either the submit,
            // discard or the sync button and changed `state.modifications` to either "submitting", "discarding",
            // or "syncing". Reason why the ternary expression now always evaluates to true is so that the submit
            // and discard buttons are always shown (during development).
            setState(prevState => ({...prevState, modifications: modifications.length ? "true" : "true"}))
        }
    }, [modifications])

    // ====== EVENT HANDLERS ======>
    function submitModifications() {
        log.warn("User tried to submit modifications, a feature which isn't yet implemented.")
        log.trace("state:", state)
        setState(prevState => ({...prevState, modifications: "submitting"}))
        // TODO: implement submitting modifications (keep reading)
        // Once all the necessary systems are in place, `state.modifications` should automatically
        // be set back to "false" by the hook/side-effect (useEffect()) watching the `modifications` prop.
        // How does the prop change? Here's a cryptic poem about that:
        //   Once the boomerang that is the submission the user just submitted
        //   Comes back around and hits the app from outside
        //   Thence the guardians of the wall
        //   Will send a crow upriver
        //   Informing the Footer that the modifications are once again none
        setTimeout(() => setState(prevState => ({...prevState, modifications: "false", snackbar: strings.submitted})), 1640)
    }
    function discardModifications() {
        log.warn("User tried to discard modifications, a feature which isn't yet implemented.")
        setState(prevState => ({...prevState, modifications: "discarding"}))
        // TODO: implement discarding modifications (keep reading)
        // Once all the necessary systems are in place, `state.modifications` should automatically
        // be set back to "false" by the hook/side-effect (useEffect()) watching the `modifications` prop.
        // How does the prop change? Here's a cryptic poem about that:
        //   Once the boomerang that is the order discarding the modifications that the user just executed
        //   Comes back around and hits the app from outside
        //   Thence the guardians of the wall
        //   Will send a crow upriver
        //   Informing the Footer that the modifications are no more
        setTimeout(() => setState(prevState => ({...prevState, modifications: "false", snackbar: strings.discarded})), 500)
    }
    function syncData() {
        log.warn("User tried to synchronize data, a feature which isn't yet implemented.")
        setState(prevState => ({...prevState, modifications: "syncing"}))
        // TODO: implement syncing data (keep reading)
        // Once all the necessary systems are in place, `state.modifications` should automatically
        // be set back to "false" by the hook/side-effect (useEffect()) watching the `modifications` prop.
        setTimeout(() => setState(prevState => ({...prevState, modifications: "false", snackbar: strings.synced})), 1180)
    }
    function undo() {
        // TODO: implement undoing submit/discard (keep reading)
        // Once all the necessary systems are in place, `state.modifications` should automatically
        // be set back to "false" by the hook/side-effect (useEffect()) watching the `modifications` prop.
        setState(prevState => ({...prevState, modifications: "true", snackbar: ""}))
    }
    function closeSnackbar(event, reason) {
        if (state.snackbar === strings.discarded && reason === "clickaway") return
        setState(prevState => ({...prevState, snackbar: ""}))
    }

    // ====== MISC. LOGIC ======>
    const submitDiscardButtons = useMemo(() => {
        const transitionTimes = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
        }
        const transitionDelay = `${state.modifications === "true" ? transitionTimes.exit : 0}ms`
        return (
            <Grid
                className={styles.submitDiscardButtons}
                container
                direction={"row-reverse"}
                item
                spacing={themeParams.spacing / 2}
                xs>
                <Grid item>
                    <Zoom
                        in={state.modifications === "true"}
                        timeout={transitionTimes}
                        style={{transitionDelay}}
                        unmountOnExit>
                        <Fab
                            className={styles.saveButton}
                            onClick={submitModifications}
                            color={"inherit"}
                            aria-label={"save"}>
                                <SaveIcon/>
                        </Fab>
                    </Zoom>
                </Grid>
                <Grid item>
                    <Zoom
                        in={state.modifications === "true"}
                        timeout={transitionTimes}
                        style={{transitionDelay}}
                        unmountOnExit>
                        <Fab
                            className={styles.discardButton}
                            onClick={discardModifications}
                            color={"inherit"}
                            aria-label={"discard"}>
                                <DeleteRoundedIcon/>
                        </Fab>
                    </Zoom>
                </Grid>
            </Grid>
        )
    }, [strings, styles, state.modifications])
    const snackbarClasses = `${styles.snackbar} ${state.modifications === "true" ? styles.snackbarExtraPadding : ""}`
    const anchorOrigin = {vertical: "bottom", horizontal: "left"}
    const autoHideDuration = 5000
    const contentProps = {className: styles.snackbarContent, "aria-describedby": "message-id"}
    const undoButton = (
        <Button
            key="undo"
            className={styles.snackbarUndoButton}
            onClick={undo}
            size="small">
                {strings.undo}
        </Button>
    )
    const closeButton = (
        <IconButton
            key="close"
            className={styles.snackbarCloseButton}
            onClick={closeSnackbar}
            color="inherit"
            aria-label="close">
                <CloseIcon/>
        </IconButton>
    )

    // ====== RENDER ======>
    return (
        <>
            <Grid
                className={`${styles.footer} ${mobile ? styles.footerMobile : null}`}
                container>
                    <Grid item xs={!mobile}>
                        <IconButton
                            className={styles.syncButton}
                            onClick={syncData}
                            size={"small"}
                            aria-label={"sync"}>
                                <SyncRoundedIcon
                                    className={`${styles.spin} ${/^(syncing|submitting)$/.test(state.modifications) ? styles.spinPlaying : styles.spinPaused}`}/>
                        </IconButton>
                    </Grid>
                    <Grid className={styles.lastUpdatedContainer} item xs={!mobile}>
                        <Typography className={styles.lastUpdated} variant={"caption"}>
                            <b>{strings.lastUpdated}</b>
                            {state.latestTimestamp
                                ? ` ${strings.date(state.latestTimestamp)}`
                                : ` ${strings.calculating}`}
                        </Typography>
                    </Grid>
                    {submitDiscardButtons}
            </Grid>
            <Snackbar
                onClose={closeSnackbar}
                className={snackbarClasses}
                anchorOrigin={anchorOrigin}
                autoHideDuration={autoHideDuration}
                message={<span id="message-id">{strings.synced}</span>}
                ContentProps={contentProps}
                open={state.snackbar === strings.synced}/>
            <Snackbar
                onClose={closeSnackbar}
                className={snackbarClasses}
                anchorOrigin={anchorOrigin}
                autoHideDuration={autoHideDuration}
                message={<span id="message-id">{strings.submitted}</span>}
                ContentProps={contentProps}
                open={state.snackbar === strings.submitted}/>
            <Snackbar
                onClose={closeSnackbar}
                className={snackbarClasses}
                action={[undoButton, closeButton]}
                anchorOrigin={anchorOrigin}
                autoHideDuration={autoHideDuration}
                message={<span id="message-id">{strings.discarded}</span>}
                ContentProps={contentProps}
                open={state.snackbar === strings.discarded}/>
        </>
    )
}

export default withLogging(Footer)
