import { withLogging } from "gillog"

import { useState, useEffect } from "react"
import useTheme from "@material-ui/core/styles/useTheme"
import Grid from "@material-ui/core/Grid"
import Zoom from "@material-ui/core/Zoom"
import IconButton from "@material-ui/core/IconButton"
import SyncRoundedIcon from "@material-ui/icons/SyncRounded"
import Typography from "@material-ui/core/Typography"
import Fab from "@material-ui/core/Fab"
import SaveIcon from "@material-ui/icons/Save"
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded"
import Snacky from "utility/snacky.js"
import useStyles from "./styles"

import themeParams from "theme/custom-parameters"



function Footer({ log, mobile, strings }) {

    // ====== INITIAL LOGIC ======>

    // ====== HOOKS ======>
    const styles = useStyles()
    const theme = useTheme()
    const [state, setState] = useState({
        lastUpdated: 0, // TODO: "actually" implement lastUpdated
        changes: true // TODO: "actually implement change tracker
    })
    const [showSubmit, setShowSubmit] = useState(false);
    const [showDiscard, setShowDiscard] = useState(false);


    // ====== EVENT HANDLERS ======>
    function submitChanges() {
        console.log('submitting changes');
        setShowSubmit(true);
    }

    function discardChanges() {
        setShowDiscard(true);
    }

    function syncData() {
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={1500}
            disableWindowBlurListener={true}>
            <Snack />
        </SnackbarProvider>
    }

    const setFalse = () => {
        console.log('Setting to false');
        setShowSnacky(false);
    }

    // ====== FUNCTIONS ======>

    // ====== "SUB" COMPONENTS ======>
    function ConditionalFloatingActionButton({ condition, children, ...props }) {
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
                style={{ transitionDelay }}
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
            onMouseOut={() => { console.log("Shmooovin"); }}
            className={`${styles.footer} ${mobile ? styles.footerMobile : null}`} container>
            <Grid item xs={!mobile}>
                <IconButton
                    className={styles.syncButton}
                    onClick={syncData}
                    size={"small"}
                    aria-label={"sync"}>
                    <SyncRoundedIcon />
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
                <Grid item
                    onMouseMove={() => setShowSubmit(false)}
                >
                    <ConditionalFloatingActionButton
                        className={styles.saveButton}
                        onClick={submitChanges}
                        condition={state.changes}
                        color={"inherit"}
                        aria-label={"save"}>
                        <SaveIcon />
                    </ConditionalFloatingActionButton>
                    {showSubmit ? <Snacky message="Saved Changes" /> : ""}
                </Grid>
                <Grid item
                    onMouseMove={() => setShowDiscard(false)}
                >
                    <ConditionalFloatingActionButton
                        className={styles.discardButton}
                        onClick={discardChanges}
                        condition={state.changes}
                        color={"inherit"}
                        aria-label={"discard"}>
                        <DeleteRoundedIcon />
                    </ConditionalFloatingActionButton>
                    {showDiscard ? <Snacky message="Discarded Changes" /> : ""}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withLogging(Footer)
