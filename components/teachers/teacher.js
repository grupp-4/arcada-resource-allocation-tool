import {withLogging} from "gillog"

import {Fragment} from "react"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import InputBase from "@material-ui/core/InputBase"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"

import TeacherAvatar from "./teacher-avatar"

import AddCourse from "./add-course"

import useCtStyles from "styles/courses-teachers"
import useStyles from "./styles"
import {CardActions} from "@material-ui/core"

function Teacher({log, setHours, setTeacher, invalidate, teacher, courses, data, mobile, strings}) {

    // ====== INITIAL LOGIC ======>
    const assignedCourses = data.courses.filter(course => course.teacher === teacher.ame) // Makes array of courses that match teacher name
    let totalHoursPerPeriod = [0, 0, 0, 0]

    // ====== HOOKS ======>
    const ctStyles = useCtStyles()
    const styles = useStyles()

    // ====== FUNCTIONS ======>
    function calcTotalHours(arr) {
        return arr[0] + arr[1] + arr[2] + arr[3]
    }
    function modifyHours(event, courseName, period) {
        // This allows event to be read during function execution, in cost of performance
        event.persist()
        const index = data.courses.findIndex(course => course.name === courseName)
        const hours = parseInt(event.target.value)
        // Updates the targeted course with new hour
        setHours(courseName, period, hours)
            .then(() => log.debug("Successfully set hours"))
            .catch(error => log.error(error.message))
        data.courses[index].hours[period] = hours
        log.debug("data.courses[index].hours[period]:", data.courses[index].hours[period])
        // Creates/overrides localStorage "data" key with the updated data
        window.localStorage.setItem("data", JSON.stringify(data))
        log.debug("localStorage.data (new):", JSON.parse(window.localStorage.data))
    }

    // ====== RENDER ======>
    return (
        <Card className={mobile ? ctStyles.cardMobile : ctStyles.cardDesktop}>
            <CardHeader
                className={styles.cardHeader}
                avatar={<TeacherAvatar teacher={teacher}/>}
                title={teacher.name}/>
            <CardContent className={ctStyles.cardContent}>
                <Table
                    className={`${styles.table} ${styles.nestedElements}`}
                    key={teacher.name + "-table"}
                    classes={{root: styles.table.root, label: styles.table.label}}>
                        <TableHead>
                            <TableRow>
                                <TableCell className={styles.tableCell}>{strings.course}</TableCell>
                                <TableCell>{strings.period1}</TableCell>
                                <TableCell>{strings.period2}</TableCell>
                                <TableCell>{strings.period3}</TableCell>
                                <TableCell>{strings.period4}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {assignedCourses.map((course, index) => {
                                totalHoursPerPeriod = totalHoursPerPeriod.map((hours, index) => hours += course.hours[index])
                                return (
                                    <Fragment key={index}>
                                        <TableRow key={course.name + "-courseRow"} className={styles.tableRow}>
                                            <TableCell
                                                key={course.name + "-cell1"}
                                                className={`${styles.tableCell} ${styles.thCustomWidth}`}
                                                component={"th"}
                                                scope={"row"}>
                                                    {course.name}<br/>{course.courseCode}
                                            </TableCell>
                                            <TableCell align="right" key={course.name + "-cell2"}>
                                                <InputBase
                                                    type="number"
                                                    key={course.name + "-input1"}
                                                    className={styles.inputBase}
                                                    onChange={event => modifyHours(event, course.name, 1)}
                                                    defaultValue={course.hours[0]}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                            <TableCell align="right" key={course.name + "-cell3"}>
                                                <InputBase
                                                    type="number"
                                                    key={course.name + "-input2"}
                                                    className={styles.inputBase}
                                                    onChange={event => modifyHours(event, course.name, 2)}
                                                    defaultValue={course.hours[1]}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                            <TableCell align="right" key={course.name + "-cell4"}>
                                                <InputBase
                                                    type="number"
                                                    key={course.name + "-input3"}
                                                    className={styles.inputBase}
                                                    onChange={event => modifyHours(event, course.name, 3)}
                                                    defaultValue={course.hours[2]}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                            <TableCell align="right" key={course.name + "-cell5"}>
                                                <InputBase
                                                    type="number"
                                                    key={course.name + "-input4"}
                                                    className={styles.inputBase}
                                                    onChange={event => modifyHours(event, course.name, 4)}
                                                    defaultValue={course.hours[3]}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                )
                            })}
                            <TableRow
                                key={teacher.name + "-periodHoursRow"}
                                className={styles.tableRow}>
                                    <TableCell
                                        key={teacher.name + "-cell1"}
                                        className={`${styles.tableCell} ${styles.thCustomWidth}`}
                                        component={"th"}
                                        scope={"row"}>
                                            <strong>{`${strings.totalHours} ${calcTotalHours(totalHoursPerPeriod)}`}</strong>
                                    </TableCell>
                                    {totalHoursPerPeriod.map(hours => <TableCell>{hours}</TableCell>)}
                            </TableRow>
                        </TableBody>
                </Table>
            </CardContent>
            <CardActions className={ctStyles.cardActions}>
                <AddCourse
                    setTeacher={setTeacher}
                    addCourse={invalidate}
                    teacher={teacher.name}
                    dropdownList={courses}
                    strings={strings}
                    loglevel={log.getLevel()}/>
            </CardActions>
        </Card>
    )
}

export default withLogging(Teacher)
