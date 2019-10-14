import {withLogging} from "gillog"

import {useState} from "react"

import Select from "components/select"

import useStyles from "styles/add-course-teacher"

function AddTeacher({log, setTeacher, teacher, course, dropdownList, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const [single, setSingle] = useState(teacher ? {value: teacher, label: teacher} : null)

    // ====== FUNCTIONS ======>
    // Triggered on change, updates the state
    function addTeacherToCourse(value, courseName) {
        setSingle(value)
        // Updates the targeted course with new teacher
        setTeacher(courseName, value.value)
            .then(() => log.debug("Successfully set teacher"))
            .catch(error => log.error(error.message))
    }

    // ====== RENDER ======>
    return (
        <div className={styles.root}>
            <Select
                placeholder={strings.assignTeacher}
                options={dropdownList}
                value={single}
                onChange={event => addTeacherToCourse(event, course)}/>
        </div>
    )
}

AddTeacher.id = "AddTeacher"

export default withLogging(AddTeacher)
