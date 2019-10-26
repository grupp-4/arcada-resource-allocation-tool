import {withLogging} from "gillog"

import {useState, useEffect} from "react"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

import useTypographyStyles from "styles/typography"
import useStyles from "./styles"

function EventsFeed({log, cs, strings}) {

    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()
    const styles = useStyles()
    const [state, setState] = useState({
        events: null
    })
    useEffect(() => {
        if (cs) {
            cs.getADozenChanges()
                .then(events => setState(prevState => ({...prevState, events})))
                .catch(error => log.error(error.stack))
        }
    }, [cs])

    // ====== RENDER ======>
    return state.events ? state.events.length ? (
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
