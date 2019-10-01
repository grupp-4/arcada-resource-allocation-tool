import {withLogging} from "gillog"

import {Fragment} from "react"

import Typography from "@material-ui/core/Typography"

import useTypographyStyles from "styles/typography"

function Teachers({log, data, strings}) {
    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()

    // ====== RENDER ======>
    return (
        <Typography className={typographyStyles.typography} variant={"body1"}>
            {data && data.teachers
                ? data.teachers.map((teacher, index) => <Fragment key={index}>{`${teacher.firstName} ${teacher.lastName}`}<br/></Fragment>)
                : "Loading teachers..."}
        </Typography>
    )
}

export default withLogging(Teachers)
