import {withLogging} from "gillog"

import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

import useStyles from "styles/paper"

function EventsFeed({log}) {
    const styles = useStyles()
    return(
        <Grid item xs={4}>
            <Paper className={styles.paper}>
                This is the events feed.
            </Paper>
        </Grid>
    )
}

EventsFeed.id = "events-feed"

export default withLogging(EventsFeed)
