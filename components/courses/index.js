import {withLogging} from "gillog"

import {Fragment, useState, useEffect} from "react"

import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

import useTypographyStyles from "styles/typography"

function Courses({log, data, strings}) {

    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()
    const [courses, setCourses] = useState(null)
    useEffect(() => {
        if (data) {
            data.getCourses()
                .then(courses => setCourses(courses))
                .catch(error => log.error(error.stack))
        }
    }, [data])

    // ====== RENDER ======>
    return courses ? (
        <Typography className={typographyStyles.typography} variant={"body1"}>
            {courses.map((course, index) => <Fragment key={index}>{course.name}<br/></Fragment>)}
        </Typography>
    ) : (
        <CircularProgress/>
    )
}

export default withLogging(Courses)
