import {withLogging} from "gillog"

import {useState} from "react"

import Select from "components/select"

import useStyles from "styles/add-course-teacher"

// TODO: get snackbar working
function AddCourse({log, setTeacher, addCourse, teacher, dropdownList, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const [single, setSingle] = useState(null)

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
        setTeacher(teacherName, value.value)
            .then(() => log.debug("Successfully set teacher"))
            .catch(error => log.error(error.message))
        storageData.courses[index].teacher = teacherName
        log.debug("storageData.courses[index].teacher:", storageData.courses[index].teacher)
        // Creates/overrides localstorage "data" key with the updated storageData
        window.localStorage.setItem("data", JSON.stringify(storageData))
        log.debug("localStorage.data (new):", JSON.parse(window.localStorage.data))
        // Pass this component's state to parent component, forcing a re-render
        addCourse(value.value)
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
