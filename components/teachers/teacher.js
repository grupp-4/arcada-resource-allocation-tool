import {withLogging} from "gillog"
import numbersOnly from "numbers-only"

import {useState} from "react"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from "@material-ui/core/CardActions"
import InputBase from "@material-ui/core/InputBase"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"

import AddCourse from "./add-course"
import TeacherAvatar from "./teacher-avatar"

import warning from "utility/warning"

import useCtStyles from "styles/courses-teachers"
import useStyles from "./styles"

function Teacher({log, setHoursForTeacher, setCourseForTeacher, teacher, courses, mobile, strings}) {

    // ====== INITIAL LOGIC ======>
    let totalHoursPerPeriod = [0, 0, 0, 0]

    // ====== HOOKS ======>
    const ctStyles = useCtStyles()
    const styles = useStyles()
    const [inputValue, setInputValue] = useState(null)

    // ====== EVENT HANDLERS ======>
    function modifyHours(event, teacherName, courseName, period) {
        const hours = parseInt(event.target.value)
        const courseIndex = teacher.courses.findIndex(({name}) => name === courseName)
        setHoursForTeacher(teacherName, courseIndex, period, hours).catch(error => log.error(error.message))
        setInputValue(hours)
    }

    // ====== RENDER ======>
    return (
        <Grid
            className={mobile ? ctStyles.cardMobile : ctStyles.cardDesktop}
            component={Card}
            item
            xs={12}>
                <CardHeader
                    className={styles.cardHeader}
                    avatar={<TeacherAvatar teacher={teacher}/>}
                    title={teacher.name}/>
                <CardContent className={ctStyles.cardContent}>
                    <Table
                        className={`${styles.table} ${styles.nestedElements}`}
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
                                {teacher.courses.map((course, index) => {
                                    totalHoursPerPeriod = totalHoursPerPeriod.map((hours, index) => {
                                        const courseHoursInPeriod = course.hours[index]
                                        return courseHoursInPeriod ? hours + courseHoursInPeriod : hours
                                    })
                                    return (
                                        <TableRow key={course.name} className={styles.tableRow}>
                                            <TableCell
                                                className={`${styles.tableCell} ${styles.thCustomWidth}`}
                                                component={"th"}
                                                scope={"row"}>
                                                    {course.name}<br/>{course.courseCode}
                                            </TableCell>
                                            <TableCell align="right">
                                                <InputBase
                                                    type={"number"}
                                                    className={warning("period", course.hours[0]) ? styles.warning : styles.inputBase}
                                                    onChange={event => modifyHours(event, teacher.name, course.name, 0)}
                                                    onKeyDown={numbersOnly}
                                                    defaultValue={course.hours[0]}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                            <TableCell align="right">
                                                <InputBase
                                                    type={"number"}
                                                    className={warning("period", course.hours[1]) ? styles.warning : styles.inputBase}
                                                    onChange={event => modifyHours(event, teacher.name, course.name, 1)}
                                                    onKeyDown={numbersOnly}
                                                    defaultValue={course.hours[1]}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                            <TableCell align="right">
                                                <InputBase
                                                    type={"number"}
                                                    className={warning("period", course.hours[2]) ? styles.warning : styles.inputBase}
                                                    onChange={event => modifyHours(event, teacher.name, course.name, 2)}
                                                    onKeyDown={numbersOnly}
                                                    defaultValue={course.hours[2]}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                            <TableCell align="right">
                                                <InputBase
                                                    type={"number"}
                                                    className={warning("period", course.hours[3]) ? styles.warning : styles.inputBase}
                                                    onChange={event => modifyHours(event, teacher.name, course.name, 3)}
                                                    onKeyDown={numbersOnly}
                                                    defaultValue={course.hours[3]}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                                <TableRow className={styles.tableRow}>
                                    <TableCell
                                        className={warning("totalHours", totalHoursPerPeriod.reduce((total, hours) => total + hours)) ? `${styles.thCustomWidth} ${styles.warning}` : `${styles.thCustomWidth} ${styles.tableCell}`}
                                        component={"th"}
                                        scope={"row"}>
                                            <b>{`${strings.totalHours} ${totalHoursPerPeriod.reduce((total, hours) => total + hours)}`}</b>
                                    </TableCell>
                                    {totalHoursPerPeriod.map((hours, index) => (
                                        <TableCell
                                            key={index + 1}
                                            className={warning("periodTotal", hours) ? styles.warning : null}>
                                                {hours.toString()}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                    </Table>
                </CardContent>
                <span className={warning("teacherCourses", null, teacher.courses) ? styles.warning : null}>
                    <CardActions className={ctStyles.cardActions}>
                        <AddCourse
                            setCourseForTeacher={setCourseForTeacher}
                            teacher={teacher.name}
                            dropdownList={courses}
                            strings={strings}
                            loglevel={log.getLevel()}/>
                    </CardActions>
                </span>
        </Grid>
    )
}

export default withLogging(Teacher)
