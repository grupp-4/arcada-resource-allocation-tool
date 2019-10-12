import {withLogging} from "gillog"

import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

import useTypographyStyles from "styles/typography"

function EventsFeed({log, cs, wc, events, strings}) {

    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()

    // ====== RENDER ======>
    return(
        <Typography className={typographyStyles.typography} component={"div"} variant={"body1"}>
            {events
                ? events.length
                    ? strings.eventsFeedDisclaimer
                    : strings.noEvents
                : <div className={typographyStyles.circularProgress}><CircularProgress/></div>}
        </Typography>
    )
}

export default withLogging(EventsFeed)
