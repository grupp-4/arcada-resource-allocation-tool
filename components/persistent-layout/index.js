import {withLogging} from "gillog"

import {useRouter} from "next/router"

import {useTheme} from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import Grid from "@material-ui/core/Grid"

import Header from "components/persistent-layout/header"
import EventsFeed from "components/events-feed"
import CoursesOrTeachers from "components/courses-or-teachers"



function PersistentLayout({log, appName, children}) {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("md"))
    const router = useRouter()
    let persistentLayout;
    if (router.pathname === "/_error") {
        persistentLayout = (
            <Grid container spacing={3}>
                <Header appName={appName} mobile={mobile}/>
                <Grid item xs={12}>
                    {children}
                </Grid>
            </Grid>
        )
    } else {
        if (mobile) {
            persistentLayout = (
                <Grid container spacing={3}>
                    <Header appName={appName} mobile={mobile}/>
                    <EventsFeed mobile={mobile}/>
                    <CoursesOrTeachers>
                        {children}
                    </CoursesOrTeachers>
                </Grid>
            )
        } else {
            persistentLayout = (
                <Grid container spacing={3}>
                    <Header appName={appName} mobile={mobile}/>
                    <EventsFeed mobile={mobile}/>
                    <CoursesOrTeachers mobile={mobile}>
                        {children}
                    </CoursesOrTeachers>
                </Grid>
            )
        }
    }
    return persistentLayout
}

export default withLogging(PersistentLayout)
