import {withLogging} from "gillog"

import Typography from "@material-ui/core/Typography"

import useTypographyStyles from "styles/typography"

function Teachers({log, data}) {
    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()

    // ====== RENDER ======>
    // TODO: create this component
    return (
        <Typography className={typographyStyles.typography} variant={"body1"}>
            {data && data.teachers
                ? data.teachers.map(teacher => <>{`${teacher.firstName} ${teacher.lastName}`}<br/></>)
                : "Loading teachers..."}
        </Typography>
    )
}

Teachers.id = "teachers"

export default withLogging(Teachers)
