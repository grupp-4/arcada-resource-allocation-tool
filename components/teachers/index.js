import {clientSide} from "gillog"

import {Fragment} from "react"

import Typography from "@material-ui/core/Typography"

import useTypographyStyles from "styles/typography"

const log = clientSide.getLogger("Teachers")

function Teachers({data, strings}) {
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

Teachers.id = "teachers"

export default Teachers
