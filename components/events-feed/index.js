import {clientSide} from "gillog"

import Typography from "@material-ui/core/Typography"

import useTypographyStyles from "styles/typography"

const log = clientSide.getLogger("EventsFeed")

function EventsFeed({strings}) {

    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()

    // ====== RENDER ======>
    return(
        <Typography className={typographyStyles.typography} variant={"body1"}>
            This is the events feed.
        </Typography>
    )
}

export default EventsFeed
