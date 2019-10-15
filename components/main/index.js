import {withLogging} from "gillog"

import {useRouter} from "next/router"

import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

import EventsFeedTabView from "./events-feed-tab-view"
import CoursesTeachersTabView from "./courses-teachers-tab-view"

import useStyles from "./styles.js"

import themeParams from "theme/custom-parameters"

function Main({log, cs, mobile, strings, children}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const router = useRouter()

    // ====== MISC. LOGIC ======>
    const error = router.pathname === "/_error"
    const aboutPage = router.pathname === "/about"

    // ====== RENDER ======>
    return (
        <>
            {aboutPage ? children[0] : (
                <Grid
                    className={`${styles.container} ${mobile ? styles.containerMobile : null}`}
                    component={"main"}
                    container
                    alignContent={"flex-start"}
                    spacing={mobile ? 0 : themeParams.spacing}>
                    {error || mobile ? children[0] /* Main content: events feed, courses, teachers, or the error component */ : (
                        <>
                            <Grid className={styles.gridItem} item xs={themeParams.eventsFeedFraction}>
                                <Paper className={styles.paper} elevation={themeParams.mainPapersElevation}>
                                    <EventsFeedTabView
                                        cs={cs}
                                        strings={strings}
                                        loglevel={log.getLevel()}/>
                                </Paper>
                            </Grid>
                            <Grid className={styles.gridItem} item xs={themeParams.coursesTeachersFraction}>
                                <Paper className={styles.paper} elevation={themeParams.mainPapersElevation}>
                                    <CoursesTeachersTabView
                                        strings={strings}
                                        loglevel={log.getLevel()}>
                                        {children}
                                    </CoursesTeachersTabView>
                                </Paper>
                            </Grid>
                        </>
                    )}
                </Grid>
            )}
            {!(error|| aboutPage) && mobile ? children[1] : null}
        </>
    )
}

export default withLogging(Main)
