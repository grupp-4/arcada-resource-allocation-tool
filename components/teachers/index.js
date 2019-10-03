import {withLogging} from "gillog"

import {useState, useEffect} from "react"

import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"

import Teacher from "./teacher"

import useTypographyStyles from "styles/typography"
import useStyles from "./styles.js"


// TODO: Implement search function
function Teachers({log, data: db}) {

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
        log.debug("data:", data)
        // Creates array of all course's names, which gets sent to the AddCourse component
        const courseNames = data.courses.map(course => course.name)
        // If localStorage data exists it renders with that (this allows you to switch between tabs and not lose data)
        // TODO: find a way to switch tabs and not lose data that doesn't involve localStorage
        let storageData = window.localStorage.data
        if (storageData) {
            log.debug("localStorage data exists")
            storageData = JSON.parse(storageData)
        } else {
            window.localStorage.setItem("data", JSON.stringify(data))
            storageData = data
        }
        return data.teachers.map(teacher => (
            <Teacher setHours={db.setHours} teacher={teacher} data={storageData} courses={courseNames}/>
        ))
    }

    log.debug("state.data:", state.data)
    // ====== RENDER ======>
    return (
        <Typography className={typographyStyles.typography} variant={"body1"}>
            <div className={styles.root}>
                {state.data
                    ? listTeachers(state.data)
                    : <CircularProgress/>
                }
            </div>
        </Typography>
    )
}

export default withLogging(Teachers)
