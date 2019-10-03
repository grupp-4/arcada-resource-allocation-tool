import {withLogging} from "gillog"

import {Fragment, useState, useEffect} from "react"

import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

import useTypographyStyles from "styles/typography"

function Teachers({log, data, strings}) {

    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()
    const [teachers, setTeachers] = useState(null)
    useEffect(() => {
        if (data) {
            data.getTeachers()
                .then(teachers => setTeachers(teachers))
                .catch(error => log.error(error.stack))
        }
    }, [data])

    // ====== RENDER ======>
    return (
        <Typography className={typographyStyles.typography} variant={"body1"}>
            {teachers
                ? teachers.map((teacher, index) => <Fragment key={index}>{`${teacher.firstName} ${teacher.lastName}`}<br/></Fragment>)
                : <CircularProgress/>
            }
        </Typography>
    )
}

export default withLogging(Teachers)
