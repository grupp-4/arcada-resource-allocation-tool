import {withLogging} from "gillog"

import {useEffect, useState} from "react"

import {useTheme} from "@material-ui/core/styles"

import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Grid from "@material-ui/core/Grid"
import Zoom from "@material-ui/core/Zoom"
import Fab from "@material-ui/core/Fab"
import SaveIcon from "@material-ui/icons/Save"
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import SyncRoundedIcon from "@material-ui/icons/SyncRounded"

import Courses from "components/courses"
import Teachers from "components/teachers"

import useStyles from "./styles"

import themeParams from "theme/custom-parameters"

function CoursesTeachersTabView({log, pathname, strings, children}) {

    // ====== INITIAL LOGIC ======>

    // TODO: integrate with Next's Link component
    // definitions: Array of information about tabs to render.
    // key: Used for determining the pre-selected tab by matching URL path to this.
    // label: Tab title (in Swedish), hardcoded for now.
    const definitions = [
        {key: "courses", label: strings.coursesTabName},
        {key: "teachers", label: strings.teachersTabName}
    ]
    // Gets the index of the "definition" that has a key that matches the current URL path.
    let currentTab = definitions.findIndex(definition => {
        return definition.key === pathname
    })
    // If no match is found (which probably means the current URL path is root, a.k.a /) then
    // currentTab defaults to the first index (0).
    if (currentTab === -1) currentTab = 0

    // ====== HOOKS ======>

    const styles = useStyles()

    const theme = useTheme()

    const [state, setState] = useState({
        currentTab: currentTab,
        lastUpdated: "just nu", // TODO: "actually" implement lastUpdated
        changes: true // TODO: "actually implement change tracker
    })

    useEffect(() => {
        log.debug(`Loading tab view with pre-selected tab: ${definitions[state.currentTab].key}`)
    }, [])

    // ====== EVENT HANDLERS ======>

    function changeTab(event, newValue) {
        // TODO: integrate with Next's Link component
        // Sets the `state` variable distributed throughout the tab view
        // to the index of the Tab that was clicked.
        log.debug(`Selecting tab: ${definitions[newValue].key}`)
        setState(prevState => ({...prevState, ...{currentTab: newValue}}))
    }

    function submitChanges() {
        // TODO: implement submitting changes
        log.debug("User tried to submit changes, a feature which isn't yet implemented.")
    }

    function discardChanges() {
        // TODO: implement submitting changes
        log.debug("User tried to discard changes, a feature which isn't yet implemented.")
    }

    // ====== "SUB" COMPONENTS ======>

    function TabPanel({index, currentTab, children}) {
        return (
            <div
                className={styles.tabPanel}
                role="tabpanel"
                id={`tabpanel-${index}`}
                aria-labelledby={`tab-${index}`}
                hidden={index !== currentTab}>
                {children}
            </div>
        )
    }

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
        <>
            <Tabs className={styles.tabs} value={state.currentTab} onChange={changeTab} indicatorColor={"primary"} centered aria-label={"tabs"}>
                {definitions.map(({key, label}, index) => {
                    return <Tab id={`tab-${index}`} key={key} label={label}
                                aria-controls={`tabpanel-${index}`}/>
                })}
            </Tabs>
            {definitions.map(({key}, index) => {
                // TODO: integrate with Next's Link component
                // Populates the `content` variable with the appropriate component,
                // based on the key property of the "definition" currently iterated.
                // The `content` variable is then set as the child of the TabPanel returned by the iteration.
                let content
                switch (key) {
                    case "courses":
                        content = <Courses data={children.props.data}/>
                        break
                    case "teachers":
                        content = <Teachers data={children.props.data}/>
                }
                return <TabPanel key={key} index={index} currentTab={state.currentTab}>{content}</TabPanel>
            })}
            <Grid className={styles.coursesTeachersTabViewFooter} container>
                <Grid item xs={4}>
                    <IconButton className={styles.syncButton} size={"small"} aria-label={"sync"}>
                        <SyncRoundedIcon/>
                    </IconButton>
                </Grid>
                <Grid className={styles.lastUpdatedContainer} item xs={4}>
                    <Typography className={styles.lastUpdated} variant={"caption"}>
                        <b>Senast uppdaterad:</b> {state.lastUpdated}
                    </Typography>
                </Grid>
                <Grid className={styles.submitDiscardButtons} item container direction={"row-reverse"} spacing={themeParams.spacing / 2} xs={4}>
                    <Grid item>
                        <ConditionalFloatingActionButton className={styles.saveButton} condition={state.changes} color={"inherit"} aria-label={"save"}>
                            <SaveIcon/>
                        </ConditionalFloatingActionButton>
                    </Grid>
                    <Grid item>
                        <ConditionalFloatingActionButton className={styles.discardButton} condition={state.changes} color={"inherit"} aria-label={"discard"}>
                            <DeleteRoundedIcon/>
                        </ConditionalFloatingActionButton>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default withLogging(CoursesTeachersTabView)
