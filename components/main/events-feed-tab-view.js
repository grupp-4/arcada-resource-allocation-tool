import {withLogging} from "gillog"

import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import EventsFeed from "components/events-feed"

import useStyles from "./styles"

function EventsFeedTabView({log, db, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()

    // ====== INITIAL LOGIC ======>
    const key = "events-feed",
        label = strings.eventsFeedTabName,
        index = 0

    // ====== RENDER ======>
    return (
        <>
            <Tabs className={styles.tabs} classes={{indicator: styles.eventsFeedTabIndicator}}
                  value={index} centered aria-label="tabs">
                <Tab classes={{root: styles.eventsFeedTab}}
                     key={key} label={label} disableRipple disableFocusRipple disableTouchRipple tabIndex={-1}
                     id={`tab-${index}`} aria-controls={`tabpanel-${index}`}/>
            </Tabs>
            <div
                className={styles.tabPanel}
                role="tabpanel"
                id={`tabpanel-${index}`}
                aria-labelledby={`tab-${index}`}>
                <EventsFeed db={db} strings={strings}/>
            </div>
        </>
    )
}

export default withLogging(EventsFeedTabView)
