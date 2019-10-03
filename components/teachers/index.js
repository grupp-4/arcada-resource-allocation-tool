import {withLogging} from "gillog"

import {useState, useEffect} from "react"

import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

import Teacher from "./teacher"

import useTypographyStyles from "styles/typography"
import useStyles from "./styles.js"

// TODO: implement search, sort and filter functions
function Teachers({log, db}) {

    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()
    const styles = useStyles()
    const [state, setState] = useState({
        data: null
    })
    useEffect(() => {
        if (db) {
            db.getEverything().then(data => setState({...state, data}))
        }
    }, [db])

    // ====== FUNCTIONS ======>
    function listTeachers(data) {
        // Creates array of all course's names, which gets sent to the AddCourse component
        const courseNames = data.courses.map(course => course.name)
        // If localStorage data exists it renders with that (this allows you to switch between tabs and not lose data)
        // TODO: deprecate usage of localStorage, integrate the IDB library
        let storageData = window.localStorage.data
        if (storageData) {
            storageData = JSON.parse(storageData)
            log.debug("localStorage data exists:", storageData)
        } else {
            window.localStorage.setItem("data", JSON.stringify(data))
            storageData = data
            log.debug("localStorage data doesn't exist. Putting following data in there:", storageData)
        }
        return storageData.teachers.map((teacher, index) => (
            <Teacher
                key={index}
                setHours={db.setHours}
                setTeacher={db.setTeacher}
                invalidate={invalidate}
                teacher={teacher}
                data={storageData}
                courses={courseNames}/>
        ))
    }
    function invalidate() {
        db.getEverything().then(data => setState({...state, data}))
    }

    // ====== RENDER ======>
    return (
        <div className={styles.root}>
            {state.data
                ? listTeachers(state.data)
                : <div className={styles.circularProgress}><CircularProgress/></div>
            }
        </div>
    )
}

export default withLogging(Teachers)
