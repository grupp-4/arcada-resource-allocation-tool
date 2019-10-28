import {withLogging} from "gillog"

import {useState} from "react"

import Select from "components/select"
import Snack from "components/snack"

import useStyles from "styles/add-course-teacher"

function AddCourse({log, setCourseForTeacher, teacher, dropdownList, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const [single, setSingle] = useState(null)
    const [open, setOpen] = useState(false);

    // ====== FUNCTIONS ======>
    // Triggered on change, updates the state
    function addCourseToTeacher(value, teacherName) {
        // Updates the targeted course with new teacher
        setCourseForTeacher(teacherName, value.value, teacher.courses.length).catch(error => log.error(error.message))
        // This state tells the snackbar to be rendered
        setSingle(value)
        setOpen(true)
    }

    // ====== RENDER ======>
    return (
        <div className={styles.root}>
            <Select
                placeholder={strings.assignCourse}
                options={dropdownList}
                value={single}
                onChange={event => addCourseToTeacher(event, teacher)}/>
            <Snack setOpen={setOpen} open={open} message={"Course Added"}/>
        </div>
    )
}

AddCourse.id = "AddCourse"

export default withLogging(AddCourse)
