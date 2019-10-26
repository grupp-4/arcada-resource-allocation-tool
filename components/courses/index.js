import {withLogging} from "gillog"

import {useEffect, useState} from "react"

import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"

import Course from "./course"

import useCtStyles from "styles/courses-teachers"

// TODO: implement search, sort and filter functions
function Courses({log, wc, mobile, strings}) {

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

    // ====== FUNCTIONS ======
    function listCourses(data) {
        // Creates array of all teachers' names, which gets sent to the AddTeacher component
        const teacherNames = data.teachers.map(teacher => teacher.name)
        return data.courses.map((course, index) => (
            <Course
                key={index}
                setHours={wc.setHours}
                setTeacher={wc.setTeacher}
                course={course}
                teachers={teacherNames}
                mobile={mobile}
                strings={strings.course}
                loglevel={log.getLevel()}/>
        ))
    }

    // ====== RENDER ======>
    return (
        <>
            {state.data
                ? listCourses(state.data)
                : <Grid className={ctStyles.circularProgress} item xs={12}><CircularProgress/></Grid>
            }
        </>
    )
}

export default withLogging(Courses)
