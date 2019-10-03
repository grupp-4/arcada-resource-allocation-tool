import {withLogging} from "gillog"

import {useEffect, useState} from "react"

import CircularProgress from "@material-ui/core/CircularProgress"

import Course from "./course"

import useCtStyles from "styles/courses-teachers"

// TODO: implement search, sort and filter functions
function Courses({log, db, mobile, strings}) {

    // ====== HOOKS ======>
    const ctStyles = useCtStyles()
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
                teachers={teacherNames}
                data={storageData}
                mobile={mobile}
                strings={strings.course}/>
        ))
    }

    function invalidate() {
        db.getEverything().then(data => setState({...state, data}))
    }

    // ====== RENDER ======>
    return (
        <div className={ctStyles.root}>
            {state.data
                ? listCourses(state.data)
                : <div className={ctStyles.circularProgress}><CircularProgress/></div>
            }
        </div>
    )
}

export default withLogging(Courses)
