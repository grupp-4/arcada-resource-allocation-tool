import {withLogging} from "gillog"

import {useState} from "react"

import Select from "components/select"
import Snacky from "components/snacky"

import useStyles from "styles/add-course-teacher"

// TODO: get snackbar working
function AddTeacher({log, setTeacher, addTeacher, teacher, course, dropdownList, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const [single, setSingle] = useState(teacher ? {value: teacher, label: teacher} : null)
    const [doIt, setDoIt] = useState(false)

    // ====== FUNCTIONS ======>
    // Triggered on change, updates the state
    function addTeacherToCourse(value, courseName) {
        setSingle(value)
        log.debug("addTeacherToCourse() value:", value.value)
        // Updates the targeted course with new teacher
        setTeacher(courseName, value.value)
            .then(() => log.debug("Successfully set teacher"))
            .catch(error => log.error(error.message))
        // Pass this component's state to parent component, forcing a re-render
        addTeacher(value.value)
        // This state tells the snackbar to be rendered
        setDoIt(true)
    }

    // ====== RENDER ======>
    return (
        <div className={styles.root}>
            <Select
                placeholder={strings.assignTeacher}
                options={dropdownList}
                value={single}
                onChange={event => addTeacherToCourse(event, course)}/>
            {/*doIt ? <Snacky message="Teacher Added" resetState={() => setDoIt(false)}/> : ""*/""}
        </div>
    )
}

AddTeacher.id = "AddTeacher"

export default withLogging(AddTeacher)
