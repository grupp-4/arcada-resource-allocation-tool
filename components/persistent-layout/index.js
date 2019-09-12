import {withLogging} from "gillog"

import {useRouter} from "next/router"

import Grid from "@material-ui/core/Grid"
import Header from "components/header"
import EventsFeed from "components/events-feed"
import CoursesOrTeachers from "components/courses-or-teachers"

import useStyles from "./styles"

function PersistentLayout({log, children}) {
    const router = useRouter()
    const styles = useStyles()
    let persistentLayout;
    if (router.pathname === "/_error") {
        persistentLayout = (
            <div className={styles.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Header className={styles.paper}/>
                    </Grid>
                    <Grid item xs={12}>
                        {children}
                    </Grid>
                </Grid>
            </div>
        )
    } else {
        persistentLayout = (
            <div className={styles.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Header/>
                    </Grid>
                    <Grid item xs={12}>
                        <EventsFeed/>
                    </Grid>
                    <Grid item xs={12}>
                        <CoursesOrTeachers>
                            {children}
                        </CoursesOrTeachers>
                    </Grid>
                </Grid>
            </div>
        )
    }
    return persistentLayout
}

export default withLogging(PersistentLayout)
