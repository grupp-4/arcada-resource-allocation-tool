import {withLogging} from "gillog"

import {Fragment} from "react"

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
                ? data.courses.map((course, index) => <Fragment key={index}>{course.name}<br/></Fragment>)
                : "Loading teachers..."}
        </Typography>
    )
}

Courses.id = "courses"

export default withLogging(Courses)
