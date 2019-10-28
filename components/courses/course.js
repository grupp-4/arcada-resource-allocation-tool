import {withLogging} from "gillog"
import numbersOnly from "numbers-only"

import {useState} from "react"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import InputBase from "@material-ui/core/InputBase"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"

import AddTeacher from "./add-teacher"

import warning from "utility/warning"

import useCtStyles from "styles/courses-teachers"
import useStyles from "./styles"

function Course({log, setHoursForCourse, setTeacherForCourse, course, teachers, mobile, strings}) {

    // ====== INITIAL LOGIC ======>
    let totalHoursPerPeriod = [0, 0, 0, 0]

    // ====== HOOKS ======>
    const ctStyles = useCtStyles()
    const styles = useStyles()
    const [inputValue, setInputValue] = useState(null)

    // ====== FUNCTIONS ======>
    function modifyHours(event, courseName, teacherName, period) {
        const hours = parseInt(event.target.value)
        const teacherIndex = course.teachers.findIndex(({name}) => name === teacherName)
        setHoursForCourse(courseName, teacherIndex, period, hours).catch(error => log.error(error.message))
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
                    title={course.name}
                    subheader={course.courseCode}/>
                <CardContent className={ctStyles.cardContent}>
                    <Table
                        className={`${styles.table} ${styles.nestedElements}`}
                        classes={{root: styles.table.root, label: styles.table.label}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={styles.tableCell}>{strings.heldBy}</TableCell>
                                    <TableCell>{strings.period1}</TableCell>
                                    <TableCell>{strings.period2}</TableCell>
                                    <TableCell>{strings.period3}</TableCell>
                                    <TableCell>{strings.period4}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {course.teachers.map((teacher, index) => {
                                    totalHoursPerPeriod = totalHoursPerPeriod.map((hours, index) => {
                                        const teacherHoursInPeriod = teacher.hours[index]
                                        return teacherHoursInPeriod ? hours + teacherHoursInPeriod : hours
                                    })
                                    return (
                                        <TableRow key={teacher.name} className={styles.tableRow}>
                                            <TableCell
                                                className={`${styles.tableCell} ${styles.thCustomWidth}`}
                                                component={"th"}
                                                scope={"row"}>
                                                    {teacher.name}
                                            </TableCell>
                                            <TableCell align={"right"}>
                                                <InputBase
                                                    type={"number"}
                                                    className={warning("period", teacher.hours[0]) ? styles.warning : styles.inputBase}
                                                    onChange={event => modifyHours(event, course.name, teacher.name, 0)}
                                                    onKeyDown={numbersOnly}
                                                    defaultValue={teacher.hours[0]}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                            <TableCell align={"right"}>
                                                <InputBase
                                                    type={"number"}
                                                    className={warning("period", teacher.hours[1]) ? styles.warning : styles.inputBase}
                                                    onChange={event => modifyHours(event, course.name, teacher.name, 1)}
                                                    onKeyDown={numbersOnly}
                                                    defaultValue={teacher.hours[1]}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                            <TableCell align={"right"}>
                                                <InputBase
                                                    type={"number"}
                                                    className={warning("period", teacher.hours[2]) ? styles.warning : styles.inputBase}
                                                    onChange={event => modifyHours(event, course.name, teacher.name, 2)}
                                                    onKeyDown={numbersOnly}
                                                    defaultValue={teacher.hours[2]}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                            <TableCell align={"right"}>
                                                <InputBase
                                                    type={"number"}
                                                    className={warning("period", teacher.hours[3]) ? styles.warning : styles.inputBase}
                                                    onChange={event => modifyHours(event, course.name, teacher.name, 3)}
                                                    onKeyDown={numbersOnly}
                                                    defaultValue={teacher.hours[3]}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                                <TableRow className={styles.tableRow}>
                                    <TableCell
                                        className={warning("courseTotalHours", totalHoursPerPeriod.reduce((total, hours) => total + hours)) ? `${styles.thCustomWidth} ${styles.warning}` : `${styles.thCustomWidth} ${styles.tableCell}`}
                                        component={"th"}
                                        scope={"row"}>
                                        <b>{`${strings.totalHours} ${totalHoursPerPeriod.reduce((total, hours) => total + hours)}`}</b>
                                    </TableCell>
                                    {totalHoursPerPeriod.map((hours, index) => (
                                        <TableCell
                                            key={index + 1}
                                            className={warning("coursePeriodTotal", hours) ? styles.warning : null}>
                                            {hours.toString()}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                    </Table>
                </CardContent>
                <span className={warning("teacherCourses", course.teachers) ? styles.warning : null}>
                    <CardActions className={ctStyles.cardActions}>
                        <AddTeacher
                            setTeacherForCourse={setTeacherForCourse}
                            teacher={course.teacher}
                            course={course.name}
                            dropdownList={teachers}
                            strings={strings}
                            loglevel={log.getLevel()}/>
                    </CardActions>
                </span>
        </Grid>
    )
}

export default withLogging(Course)
