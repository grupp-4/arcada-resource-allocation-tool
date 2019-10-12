import {withLogging} from "gillog"

import {useState, useMemo} from "react"

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

function Footer({log, lastUpdated, modifications, mobile, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const theme = useTheme()
    const [state, setState] = useState({
        changes: modifications ? "true" : "false",
        snackbar: ""
    })

    // ====== EVENT HANDLERS ======>
    function submitChanges() {
        // TODO: implement submitting changes
        log.warn("User tried to submit changes, a feature which isn't yet implemented.")
        setState({...state, changes: "submitting"})
        setTimeout(() => setState({...state, changes: "false", snackbar: strings.submitted}), 1640)
    }
    function discardChanges() {
        // TODO: implement discarding changes
        log.warn("User tried to discard changes, a feature which isn't yet implemented.")
        setState({...state, changes: "discarding"})
        setTimeout(() => setState({...state, changes: "false", snackbar: strings.discarded}), 500)
    }
    function syncData() {
        // TODO: implement syncing data
        log.warn("User tried to synchronize data, a feature which isn't yet implemented.")
        setState({...state, changes: "syncing"})
        setTimeout(() => setState({...state, changes: "false", snackbar: strings.synced}), 1180)
    }
    function undo() {
        // TODO: implement undoing submit/discard
        log.warn("User tried to undo discarding changes, a feature which isn't yet implemented.")
        setState({...state, changes: "true", snackbar: ""})
    }
    function closeSnackbar(event, reason) {
        if (state.snackbar === strings.discarded && reason === "clickaway") return
        setState({...state, snackbar: ""})
    }

    // ====== MISC. LOGIC ======>
    const submitDiscardButtons = useMemo(() => {
        const transitionTimes = {
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen
        }
        const transitionDelay = `${state.changes === "true" ? transitionTimes.exit : 0}ms`
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
                        in={state.changes === "true"}
                        timeout={transitionTimes}
                        style={{transitionDelay}}
                        unmountOnExit>
                        <Fab
                            className={styles.saveButton}
                            onClick={submitChanges}
                            color={"inherit"}
                            aria-label={"save"}>
                                <SaveIcon/>
                        </Fab>
                    </Zoom>
                </Grid>
                <Grid item>
                    <Zoom
                        in={state.changes === "true"}
                        timeout={transitionTimes}
                        style={{transitionDelay}}
                        unmountOnExit>
                        <Fab
                            className={styles.discardButton}
                            onClick={discardChanges}
                            color={"inherit"}
                            aria-label={"discard"}>
                                <DeleteRoundedIcon/>
                        </Fab>
                    </Zoom>
                </Grid>
            </Grid>
        )
    }, [strings, styles, state.changes])
    const snackbarClasses = `${styles.snackbar} ${state.changes === "true" ? styles.snackbarExtraPadding : ""}`
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
                                    className={`${styles.spin} ${/^(syncing|submitting)$/.test(state.changes) ? styles.spinPlaying : styles.spinPaused}`}/>
                        </IconButton>
                    </Grid>
                    <Grid className={styles.lastUpdatedContainer} item xs={!mobile}>
                        <Typography className={styles.lastUpdated} variant={"caption"}>
                            <b>{strings.lastUpdated}</b>
                            {lastUpdated
                                ? ` ${strings.date(lastUpdated)}`
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
