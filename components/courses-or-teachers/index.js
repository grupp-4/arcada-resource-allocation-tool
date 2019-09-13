import {withLogging} from "gillog"

import PropTypes from "prop-types"

import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

import Courses from "./courses"
import Teachers from "./teachers"

import useStyles from "styles/paper"

function CoursesOrTeachers({log, children}) {
    const styles = useStyles()
    const insideComponent = children && children.type && children.type.id ? children.type.id : "unknown"
    return (
        <Grid item xs={8}>
            <Paper className={styles.paper}>
                This is the courses or teachers component.
                Inside of this component is a "{insideComponent.replace(/^\w/, cap => cap.toUpperCase())}" component.
            </Paper>
        </Grid>
    )
}

CoursesOrTeachers.id = "courses-or-teachers"

CoursesOrTeachers.propTypes = {
    children: PropTypes.shape({type: PropTypes.oneOf([Courses, Teachers])}).isRequired
}

export default withLogging(CoursesOrTeachers)
