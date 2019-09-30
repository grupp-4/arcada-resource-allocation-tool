import {withLogging} from "gillog"

import {useRouter} from "next/router"

import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

import EventsFeedTabView from "./events-feed-tab-view"
import CoursesTeachersTabView from "./courses-teachers-tab-view"
import Footer from "components/footer"

import useStyles from "./styles.js"

import themeParams from "theme/custom-parameters"

function Main({log, mobile, strings, children}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const router = useRouter()

    // ====== RENDER ======>
    return (
        <Container className={`${styles.container} ${mobile ? styles.containerMobile : null}`} maxWidth={themeParams.maxWidth}>
            <main className={styles.main}>
                {router.pathname === "_error" ? children : mobile ? (
                    <>
                        <Grid className={styles.gridContainer} container spacing={themeParams.spacing}>
                            <Grid item xs={12}>{children}</Grid>
                        </Grid>
                        <Footer mobile={mobile} strings={strings}/>
                    </>
                ) : (
                    <Grid className={styles.gridContainer} container spacing={themeParams.spacing}>
                        <Grid className={styles.gridItem} item xs={themeParams.eventsFeedFraction}>
                            <Paper className={styles.paper} elevation={themeParams.mainPapersElevation}>
                                <EventsFeedTabView data={children.props.data} strings={strings}/>
                            </Paper>
                        </Grid>
                        <Grid className={styles.gridItem} item xs={themeParams.coursesTeachersFraction}>
                            <Paper className={styles.paper} elevation={themeParams.mainPapersElevation}>
                                <CoursesTeachersTabView pathname={router.pathname} strings={strings}>{children}</CoursesTeachersTabView>
                            </Paper>
                        </Grid>
                    </Grid>
                )}
            </main>

        </Container>
    )
}

export default withLogging(Main)
