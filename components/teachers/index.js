import {withLogging} from "gillog"

import Typography from "@material-ui/core/Typography"

import useTypographyStyles from "styles/typography"

function Teachers({log}) {
    const typographyStyles = useTypographyStyles()
    return (
        <Typography className={typographyStyles.typography} variant={"body1"}>
            This is the teachers component.
        </Typography>
    )
}

Teachers.id = "teachers"

export default withLogging(Teachers)
