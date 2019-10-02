import {withLogging} from "gillog"

import Typography from "@material-ui/core/Typography"

import useTypographyStyles from "styles/typography"






function EventsFeed({log, cs, strings}) {







    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()

    // ====== RENDER ======>
    return(
        <Typography className={typographyStyles.typography} variant={"body1"}>
            cs.map
        </Typography>
    )
}

export default withLogging(EventsFeed)
