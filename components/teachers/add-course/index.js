import {withLogging} from "gillog"

import {useState} from "react"

import Select from "components/select"
import Snacky from "components/snacky"

import useStyles from "styles/add-course-teacher"

// TODO: Add button Component that confirms the course to be added
function AddCourse({log, teacher, dropdownList, passToParent}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const [single, setSingle] = useState(null)
    const [doIt, setDoIt] = useState(false)

    // Triggered on change, updates the state
    const handleChangeSingle = (value, teacher) => {
        setSingle(value)
        log.debug("handleChangeSingle() value:", value)
        let storageData = JSON.parse(window.localStorage.getItem("data"))
        // Finds position of the modified course
        let index = storageData.courses.findIndex(course => course.name === value.value)
        log.debug("index:", index)
        // Updates the targeted course with new teacher
        storageData.courses[index].teacher = teacher
        log.debug("localStorage.data (new):", storageData)
        // Creates/overrides localstorage "data" key with the updated storageData
        window.localStorage.setItem("data", JSON.stringify(storageData))
        // Pass this component's state to parent component, forcing a re-render
        passToParent(value.value)
        // This state tells the snackbar to be rendered
        setDoIt(true)
    }

    return (
        <div className={styles.root}>
            <Select
                classes={styles}
                textFieldProps={{
                    label: "Course",
                    InputLabelProps: {
                        htmlFor: "react-select-single",
                        shrink: true
                    }
                }}
                placeholder={"Add a course to this teacher"}
                options={dropdownList}
                value={single}
                onChange={event => handleChangeSingle(event, teacher)}/>
            {doIt ? <Snacky message="Course Added" resetState={() => setDoIt(false)}/> : ""}
        </div>
    )
}

AddCourse.id = "AddCourse"

export default withLogging(AddCourse)
