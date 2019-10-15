import {withLogging} from "gillog"

import {useState} from "react"

import Select from "components/select"
import Snacky from "components/snacky"

import useStyles from "styles/add-course-teacher"

// TODO: get snackbar working
function AddCourse({log, setTeacher, addCourse, teacher, dropdownList, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const [single, setSingle] = useState(null)
    const [doIt, setDoIt] = useState(false)

    // ====== FUNCTIONS ======>
    // Triggered on change, updates the state
    function addCourseToTeacher(value, teacherName) {
        setSingle(value)
        log.debug("addCourseToTeacher() value:", value)
        // Updates the targeted course with new teacher
        setTeacher(teacherName, value.value)
            .then(() => log.debug("Successfully set teacher"))
            .catch(error => log.error(error.message))
        // Pass this component's state to parent component, forcing a re-render
        addCourse(value.value)
        // This state tells the snackbar to be rendered
        setDoIt(true)
    }

    // ====== RENDER ======>
    return (
        <div className={styles.root}>
            <Select
                placeholder={strings.assignCourse}
                options={dropdownList}
                value={single}
                onChange={event => addCourseToTeacher(event, teacher)}/>
            {/*doIt ? <Snacky message="Course Added" resetState={() => setDoIt(false)}/> : ""*/""}
        </div>
    )
}

AddCourse.id = "AddCourse"

export default withLogging(AddCourse)
