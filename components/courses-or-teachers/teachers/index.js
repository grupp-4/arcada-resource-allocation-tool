import {withLogging} from "gillog"

import Paper from "@material-ui/core/Paper"

// import "./styles.scss"

function Teachers({log}) {
    return (
        <Paper>
            This is the teachers component.
        </Paper>
    )
}

Teachers.id = "teachers"

export default withLogging(Teachers)
