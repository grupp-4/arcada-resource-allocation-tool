import {withLogging} from "gillog"

import Grid from "@material-ui/core/Grid"
import Header from "../header"
import EventsFeed from "../events-feed"
import CoursesOrTeachers from "../courses-or-teachers"

function PersistentLayout({log, children}) {
    return (
        <Grid container>
            <Grid item xs>
                <Header/>
            </Grid>
            <Grid item xs>
                <EventsFeed/>
            </Grid>
            <Grid item xs>
                <CoursesOrTeachers>
                    {children}
                </CoursesOrTeachers>
            </Grid>
        </Grid>
    )
}

export default withLogging(PersistentLayout)
