import {withLogging} from "gillog"

import Typography from "@material-ui/core/Typography"

import useTypographyStyles from "styles/typography"

function Courses({log}) {
    const typographyStyles = useTypographyStyles()
    return (
        <Typography className={typographyStyles.typography} variant={"body1"}>
            This is the courses component.
        </Typography>
    )
}

Courses.id = "courses"

export default withLogging(Courses)
