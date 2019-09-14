import {withLogging} from "gillog"

import PropTypes from "prop-types"

import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"


import EventsFeed from "components/events-feed"

import TabView from "./tab-view"

function Main({log, mobile, pathname, children}) {
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
    return (
        <main>
            {pathname === "_error" ? children : (
                <Grid container spacing={2}>{mobile ? (
                        <>
                            <Grid item xs={12}><EventsFeed/></Grid>
                            <Grid item xs={12}>{children}</Grid>
                        </>
                    ) : (
                        <>
                            <Grid item xs={4}>
                                <Paper>
                                    <EventsFeed/>
                                </Paper>
                            </Grid>
                            <Grid item xs={8}>
                                <Paper>
                                    {setupTabView()}
                                </Paper>
                            </Grid>
                        </>
                    )}
                </Grid>
            )}
        </main>
    )
}

Main.propTypes = {
    mobile: PropTypes.bool,
    pathname: PropTypes.string.isRequired
}

export default withLogging(Main)
