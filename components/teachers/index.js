import {withLogging} from "gillog"

import {useState, useEffect} from "react"

import CircularProgress from "@material-ui/core/CircularProgress"

import Teacher from "./teacher"

import useCtStyles from "styles/courses-teachers"

// TODO: implement search, sort and filter functions
function Teachers({log, wc, mobile, strings}) {

    // ====== HOOKS ======>
    const ctStyles = useCtStyles()
    const [state, setState] = useState({
        data: null
    })
    useEffect(() => {
        if (wc) {
            wc.getEverything().then(data => setState({...state, data}))
        }
    }, [wc])

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
                setHours={wc.setHours}
                setTeacher={wc.setTeacher}
                invalidate={invalidate}
                teacher={teacher}
                courses={courseNames}
                data={storageData}
                mobile={mobile}
                strings={strings.teacher}
                loglevel={log.getLevel()}/>
        ))
    }
    function invalidate() {
        wc.getEverything().then(data => setState({...state, data}))
    }

    // ====== RENDER ======>
    return (
        <div className={ctStyles.root}>
            {state.data
                ? listTeachers(state.data)
                : <div className={ctStyles.circularProgress}><CircularProgress/></div>
            }
        </div>
    )
}

export default withLogging(Teachers)
