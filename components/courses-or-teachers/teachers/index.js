import {withLogging} from "gillog"

import Paper from "@material-ui/core/Paper"

import useStyles from "styles/paper"

function Teachers({log}) {
    const styles = useStyles()
    return (
        <Paper className={styles.paper}>
            This is the teachers component.
        </Paper>
    )
}

Teachers.id = "teachers"

export default withLogging(Teachers)
