import {withLogging} from "gillog"

import PropTypes from "prop-types"

import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

import EventsFeed from "components/events-feed"

import TabView from "./tab-view"

import useStyles from "./styles.js"

import themeParams from "theme/custom-parameters"

function Main({log, mobile, pathname, children}) {

    // ====== HOOKS ======>

    const styles = useStyles()

    // ====== FUNCTIONS ======>

    function setupTabView() {
        // TODO: integrate with Next's Link component
        // definitions: Array of information about tabs to render.
        // key: Used for determining the pre-selected tab by matching URL path to this.
        // label: Tab title (in Swedish), hardcoded for now.
        const definitions = [
            {key: "courses", label: "Kurser"},
            {key: "teachers", label: "Lärare"}
        ]
        // Gets the index of the "definition" that has a key that matches the current URL path.
        let currentTab = definitions.findIndex(definition => {
            return definition.key === pathname
        })
        // If no match is found (which probably means the current URL path is root, a.k.a /) then
        // currentTab defaults to the first index (0).
        if (currentTab === -1) currentTab = 0
        return (
            <TabView
                definitions={definitions}
                currentTab={currentTab}>
                {children}
            </TabView>
        )
    }

    // ====== RENDER ======>

    return (
        <Container className={styles.container} maxWidth={themeParams.maxWidth}>
            <main className={styles.main}>
                {pathname === "_error" ? children : (
                    <Grid className={mobile ? "" : styles.gridContainer} container spacing={themeParams.spacing}>{mobile ? (
                        <>
                            <Grid item xs={12}><EventsFeed/></Grid>
                            <Grid item xs={12}>{children}</Grid>
                        </>
                    ) : (
                        <>
                            <Grid className={styles.gridItem} item xs={themeParams.eventsFeedFraction}>
                                <Paper className={styles.paper}>
                                    <EventsFeed/>
                                </Paper>
                            </Grid>
                            <Grid className={styles.gridItem} item xs={themeParams.coursesTeachersFraction}>
                                <Paper className={styles.paper}>
                                    {setupTabView()}
                                </Paper>
                            </Grid>
                        </>
                    )}
                    </Grid>
                )}
            </main>
        </Container>
    )
}

Main.propTypes = {
    mobile: PropTypes.bool,
    pathname: PropTypes.string.isRequired
}

export default withLogging(Main)
