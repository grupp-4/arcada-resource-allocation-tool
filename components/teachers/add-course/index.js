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
        let storageData = JSON.parse(window.localStorage.getItem("data"))
        // Finds position of the modified course
        let index = storageData.courses.findIndex(course => course.name === value.value)
        log.debug("index:", index)
        // Updates the targeted course with new teacher
        setTeacher(courseName, value.value)
            .then(() => log.debug("Successfully set teacher"))
            .catch(error => log.error(error.message))
        storageData.courses[index].teacher = teacherName
        log.debug("storageData.courses[index].teacher:", storageData.courses[index].teacher)
        // Creates/overrides localstorage "data" key with the updated storageData
        window.localStorage.setItem("data", JSON.stringify(storageData))
        log.debug("localStorage.data (new):", JSON.parse(window.localStorage.data))
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
