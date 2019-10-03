import {withLogging} from "gillog"

import {useEffect, useState} from "react"

import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

import Course from "./course"

import useTypographyStyles from "styles/typography"
import useStyles from "./styles"

// TODO: implement search, sort and filter functions
function Courses({log, db}) {

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

    // ====== FUNCTIONS ======
    function listCourses(data) {
        // Creates array of all teachers' names, which gets sent to the AddTeacher component
        const teacherNames = data.teachers.map(({firstName, lastName}) => `${firstName} ${lastName}`)
        // If localStorage data exists it renders with that (this allows you to switch between tabs and not lose data)
        // TODO: deprecate usage of localStorage, integrate the IDB library
        let storageData = window.localStorage.data
        if (storageData) {
            storageData = JSON.parse(storageData)
            log.debug("localStorage data exists", storageData)
        } else {
            window.localStorage.setItem("data", JSON.stringify(data))
            storageData = data
            log.debug("localStorage data doesn't exist. Putting following data in there:", storageData)
        }
        return storageData.courses.map((course, index) => (
            <Course
                key={index}
                setHours={db.setHours}
                setTeacher={db.setTeacher}
                invalidate={invalidate}
                course={course}
                data={storageData}
                teachers={teacherNames}/>
        ))
    }

    function invalidate() {
        db.getEverything().then(data => setState({...state, data}))
    }

    // ====== RENDER ======>
    return (
        <div className={styles.root}>
            {state.data
                ? listCourses(state.data)
                : <div className={styles.circularProgress}><CircularProgress/></div>
            }
        </div>
    )
}

export default withLogging(Courses)
