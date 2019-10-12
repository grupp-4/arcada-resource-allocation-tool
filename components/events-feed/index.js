import {withLogging} from "gillog"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

import useTypographyStyles from "styles/typography"
import useStyles from "./styles"

function EventsFeed({log, cs, wc, events, strings}) {

    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()
    const styles = useStyles()

    // ====== RENDER ======>
    return events ? events.length ? (
        <Grid className={typographyStyles.typography} component={Typography} item variant={"body1"} xs={12}>
            {strings.eventsFeedDisclaimer}
        </Grid>
    ) : (
        <Grid className={typographyStyles.typography} component={Typography} item variant={"body1"} xs={12}>
            {strings.noEvents}
        </Grid>
    ) : (
        <Grid className={styles.circularProgress} item xs={12}>
            <CircularProgress/>
        </Grid>
    )
}

export default withLogging(EventsFeed)
