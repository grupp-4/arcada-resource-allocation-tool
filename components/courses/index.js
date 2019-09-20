import {withLogging} from "gillog"

import Typography from "@material-ui/core/Typography"

import useTypographyStyles from "styles/typography"

function Courses({log, data}) {

    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()

    // ====== RENDER ======>
    // TODO: create this component
    return (
        <Typography className={typographyStyles.typography} variant={"body1"}>
            {data && data.courses
                ? data.courses.map(course => <>{course.name}<br/></>)
                : "Loading teachers..."}
        </Typography>
    )
}

Courses.id = "courses"

export default withLogging(Courses)
