import {withLogging} from "gillog"

import {useState, useEffect} from "react"

import Grid from "@material-ui/core/Grid"
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
            wc.getEverything().then(data => setState(prevState => ({...prevState, data})))
        }
    }, [wc])

    // ====== FUNCTIONS ======>
    function listTeachers(data) {
        // Creates array of all course's names, which gets sent to the AddCourse component
        const courseNames = data.courses.map(course => course.name)
        return data.teachers.map((teacher, index) => (
            <Teacher
                key={index}
                setHoursForTeacher={wc.setHoursForTeacher}
                setCourseForTeacher={wc.setCourseForTeacher}
                teacher={teacher}
                courses={courseNames}
                mobile={mobile}
                strings={strings.teacher}
                loglevel={log.getLevel()}/>
        ))
    }

    // ====== RENDER ======>
    return (
        <>
            {state.data
                ? listTeachers(state.data)
                : <Grid className={ctStyles.circularProgress} item xs={12}><CircularProgress/></Grid>
            }
        </>
    )
}

export default withLogging(Teachers)
