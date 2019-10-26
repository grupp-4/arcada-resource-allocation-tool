import {withLogging} from "gillog"

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
import {CardActions} from "@material-ui/core"

import AddTeacher from "./add-teacher"

import useCtStyles from "styles/courses-teachers"
import useStyles from "./styles"
import numbersOnly from "numbers-only"
import warning from "utility/warning"

function Course({log, setHours, setTeacher, course, teachers, mobile, strings}) {

    // ====== INITIAL LOGIC ======>
    let totalHoursPerPeriod = [0, 0, 0, 0]

    // ====== HOOKS ======>
    const ctStyles = useCtStyles()
    const styles = useStyles()
    const [inputValue, setInputValue] = useState(null)

    // ====== FUNCTIONS ======>
    function modifyHours(event, courseName, period) {
        const hours = parseInt(event.target.value)
        setInputValue(hours)
        // Updates the targeted course with new hour
        setHours(courseName, period, hours)
            .then(() => log.debug("Successfully set hours"))
            .catch(error => log.error(error.message))
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
                        key={course.courseCode + "-table"}
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
                                                    type="number"
                                                    className={styles.inputBase}
                                                    onChange={event => modifyHours(event, course.name, 0)}
                                                    defaultValue={teacher.hours[0]}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                            <TableCell align={"right"}>
                                                <InputBase
                                                    type="number"
                                                    className={styles.inputBase}
                                                    onChange={event => modifyHours(event, course.name, 1)}
                                                    defaultValue={teacher.hours[1]}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                            <TableCell align={"right"}>
                                                <InputBase
                                                    type="number"
                                                    className={styles.inputBase}
                                                    onChange={event => modifyHours(event, course.name, 2)}
                                                    defaultValue={teacher.hours[2]}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                            <TableCell align={"right"}>
                                                <InputBase
                                                    type="number"
                                                    className={styles.inputBase}
                                                    onChange={event => modifyHours(event, course.name, 3)}
                                                    defaultValue={teacher.hours[3]}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                                <TableRow className={styles.tableRow}>
                                    <TableCell
                                        className={`${styles.tableCell} ${styles.thCustomWidth}`}
                                        component={"th"}
                                        scope={"row"}>
                                        <b>{`${strings.totalHours} ${totalHoursPerPeriod.reduce((total, hours) => total + hours)}`}</b>
                                    </TableCell>
                                    {totalHoursPerPeriod.map((hours, index) => <TableCell key={index + 1}>{hours.toString()}</TableCell>)}
                                </TableRow>
                            </TableBody>
                    </Table>
                </CardContent>
                <CardActions className={ctStyles.cardActions}>
                    <AddTeacher
                        setTeacher={setTeacher}
                        teacher={course.teacher}
                        course={course.name}
                        dropdownList={teachers}
                        strings={strings}
                        loglevel={log.getLevel()}/>
                </CardActions>
        </Grid>
    )
}

export default withLogging(Course)
