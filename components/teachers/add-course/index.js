import {withLogging} from "gillog"

import {useState} from "react"

import Select from "components/select"

import useStyles from "styles/add-course-teacher"

// TODO: get snackbar working
function AddCourse({log, setTeacher, teacher, dropdownList, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const [single, setSingle] = useState(null)

    // ====== FUNCTIONS ======>
    // Triggered on change, updates the state
    function addCourseToTeacher(value, teacherName) {
        setSingle(value)
        // Updates the targeted course with new teacher
        setTeacher(teacherName, value.value)
            .then(() => log.debug("Successfully set teacher"))
            .catch(error => log.error(error.message))
    }

    // ====== RENDER ======>
    return (
        <div className={styles.root}>
            <Select
                placeholder={strings.assignCourse}
                options={dropdownList}
                value={single}
                onChange={event => addCourseToTeacher(event, teacher)}/>
        </div>
    )
}

AddCourse.id = "AddCourse"

export default withLogging(AddCourse)
