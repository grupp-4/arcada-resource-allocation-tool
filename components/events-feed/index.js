import {withLogging} from "gillog"

import Paper from "@material-ui/core/Paper"

import useStyles from "styles/paper"

function EventsFeed({log}) {
    const styles = useStyles()
    return(
        <Paper className={styles.paper}>
            This is the events feed.
        </Paper>
    )
}

EventsFeed.id = "events-feed"

export default withLogging(EventsFeed)
