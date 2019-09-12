import {withLogging} from "gillog"

import PropTypes from "prop-types"

import Paper from "@material-ui/core/Paper"
import Courses from "./courses"
import Teachers from "./teachers"

// import "./styles.scss"

function CoursesOrTeachers({log, children}) {
    const insideComponent = children && children.type && children.type.id ? children.type.id : "unknown"
    return (
        <Paper>
            This is the courses or teachers component.
            Inside of this component is a "{insideComponent.replace(/^\w/, cap => cap.toUpperCase())}" component.
        </Paper>
    )
}

CoursesOrTeachers.id = "courses-or-teachers"

CoursesOrTeachers.propTypes = {
    children: PropTypes.shape({type: PropTypes.oneOf([Courses, Teachers])}).isRequired
}

export default withLogging(CoursesOrTeachers)
