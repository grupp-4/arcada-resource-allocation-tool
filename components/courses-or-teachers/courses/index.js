import {withLogging} from "gillog"

import Paper from "@material-ui/core/Paper"

import useStyles from "styles/paper"

function Courses({log}) {
    const styles = useStyles()
    return (
        <Paper className={styles.paper}>
            This is the courses component.
        </Paper>
    )
}

Courses.id = "courses"

export default withLogging(Courses)
