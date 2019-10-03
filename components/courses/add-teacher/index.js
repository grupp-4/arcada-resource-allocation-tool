import {withLogging} from "gillog"

import {useState} from "react"

import Select from "components/select"
import Snacky from "components/snacky"

import useStyles from "styles/add-course-teacher"

// TODO: get snackbar working
function AddTeacher({log, setTeacher, addTeacher, course, dropdownList}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const [single, setSingle] = useState(null)
    const [doIt, setDoIt] = useState(false)

    // ====== FUNCTIONS ======>
    // Triggered on change, updates the state
    function addTeacherToCourse(value, courseName) {
        setSingle(value)
        log.debug("addTeacherToCourse() value:", value.value)
        let storageData = JSON.parse(window.localStorage.getItem("data"))
        // Finds position of the modified course
        let index = storageData.courses.findIndex(course => course.name === courseName)
        log.debug("index:", index)
        // Updates the targeted course with new teacher
        setTeacher(courseName, value.value)
            .then(() => log.debug("Successfully set teacher"))
            .catch(error => log.error(error.message))
        storageData.courses[index].teacher = value.value
        log.debug("storageData.courses[index].teacher:", storageData.courses[index].teacher)
        // Creates/overrides localstorage "data" key with the updated storageData
        window.localStorage.setItem("data", JSON.stringify(storageData))
        log.debug("localStorage.data (new):", JSON.parse(window.localStorage.data))
        // Pass this component's state to parent component, forcing a re-render
        addTeacher(value.value)
        // This state tells the snackbar to be rendered
        setDoIt(true)
    }

    // ====== RENDER ======>
    return (
        <div className={styles.root}>
            <Select
                classes={styles}
                textFieldProps={{label: "Teacher"}}
                placeholder={"Add a teacher to this course"}
                options={dropdownList}
                value={single}
                onChange={event => addTeacherToCourse(event, course)}/>
            {/*doIt ? <Snacky message="Teacher Added" resetState={() => setDoIt(false)}/> : ""*/""}
        </div>
    )
}

AddTeacher.id = "AddTeacher"

export default withLogging(AddTeacher)
