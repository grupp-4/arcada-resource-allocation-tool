import {withLogging} from "gillog"

import Typography from "@material-ui/core/Typography"

import useTypographyStyles from "styles/typography"

function EventsFeed({log}) {
    const typographyStyles = useTypographyStyles()
    return(
        <Typography className={typographyStyles.typography} variant={"body1"}>
            This is the events feed.
        </Typography>
    )
}

export default withLogging(EventsFeed)
