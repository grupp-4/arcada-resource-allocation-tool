import {withLogging} from "gillog"

import Paper from "@material-ui/core/Paper"

// import "./styles.scss"

function EventsFeed({log}) {
    return(
        <Paper>
            This is the events feed.
        </Paper>
    )
}

EventsFeed.id = "events-feed"

export default withLogging(EventsFeed)
