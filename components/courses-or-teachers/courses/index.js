import {withLogging} from "gillog"

import Paper from "@material-ui/core/Paper"

// import "./styles.scss"

function Courses({log}) {
    return (
        <Paper>
            This is the courses component.
        </Paper>
    )
}

Courses.id = "courses"

export default withLogging(Courses)
