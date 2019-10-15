import {withLogging} from "gillog"

import {useState, useEffect} from "react"

import CircularProgress from "@material-ui/core/CircularProgress"

import Teacher from "./teacher"

import useCtStyles from "styles/courses-teachers"

// TODO: implement search, sort and filter functions
function Teachers({log, db, mobile, strings}) {

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

    // ====== FUNCTIONS ======>
    function listTeachers(data) {
        // Creates array of all course's names, which gets sent to the AddCourse component
        const courseNames = data.courses.map(course => course.name)
        return data.teachers.map((teacher, index) => (
            <Teacher
                key={index}
                setHours={db.setHours}
                setTeacher={db.setTeacher}
                invalidate={invalidate}
                teacher={teacher}
                courses={courseNames}
                data={data}
                mobile={mobile}
                strings={strings.teacher}/>
        ))
    }
    function invalidate() {
        db.getEverything().then(data => setState({...state, data}))
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
