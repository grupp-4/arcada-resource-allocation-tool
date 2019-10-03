import {withLogging} from "gillog"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"
import InputBase from "@material-ui/core/InputBase"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"

import AddCourse from "./add-course"

import useStyles from "./styles"

function Teacher({log, setHours, teacher, data, courses}) {

    // ====== INITIAL LOGIC ======>
    const teacherFullName = `${teacher.firstName} ${teacher.lastName}`
    let assignedCourses = data.courses.filter(course => course.teacher === teacherFullName) // Makes array of courses that match teacher name
    let periodTotalHours = [0, 0, 0, 0]

    // ====== HOOKS ======>
    const styles = useStyles()

    // ====== FUNCTIONS ======>
    function calcTotalHours(arr) {
        return arr[0] + arr[1] + arr[2] + arr[3]
    }
    function modifyHours(event, courseName, period) {
        // This allows event to be read during function execution, in cost of performance
        event.persist()
        const index = data.courses.findIndex(course => course === courseName)
        const hours = parseInt(event.target.value)
        // Updates the targeted course with new hour
        setHours(courseName, period, hours)
            .then(() => log.debug("Successfully set hours"))
            .catch(error => log.error(error.stack))
        data.courses[index].hours[period] = hours
        log.debug("data.courses[index].hours[period]:", data.courses[index].hours[period])
        // Creates/overrides localStorage "data" key with the updated data
        window.setItem("data", JSON.stringify(data))
    }

    // ====== RENDER ======>
    return (
        <Card className={styles.card}>
            <CardContent>
                <Grid container justify="center" alignItems="center">
                    {teacherFullName}<br/>
                </Grid>
                <Table
                    className={`${styles.table} ${styles.nestedElements}`}
                    key={teacherFullName + "-table"}
                    classes={{root: styles.table.root, label: styles.table.label}}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={styles.tableCell}>Course</TableCell>
                            <TableCell align="left">Period 1</TableCell>
                            <TableCell align="left">Period 2</TableCell>
                            <TableCell align="left">Period 3</TableCell>
                            <TableCell align="left">Period 4</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {assignedCourses.map(course => {
                            periodTotalHours[0] += course.hours.p1
                            periodTotalHours[1] += course.hours.p2
                            periodTotalHours[2] += course.hours.p3
                            periodTotalHours[3] += course.hours.p4
                            return (
                                <>
                                    <TableRow
                                        key={course.name + "-courseRow"}
                                        className={styles.tableRow}>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            key={course.name + "-cell1"}
                                            className={`${styles.tableCell} ${styles.thCustomWidth}`}>
                                            {course.name}<br/>{course.courseCode}
                                        </TableCell>
                                        <TableCell align="right" key={course.name + "-cell2"}>
                                            <InputBase
                                                key={course.name + "-input1"}
                                                className={styles.inputBase}
                                                defaultValue={course.hours.p1}
                                                margin='dense'
                                                onChange={e => modifyHours(e, course.name, "p1")}/>
                                        </TableCell>
                                        <TableCell align="right" key={course.name + "-cell3"}>
                                            <InputBase
                                                key={course.name + "-input2"}
                                                className={styles.inputBase}
                                                defaultValue={course.hours.p2}
                                                inputProps={{"aria-label": "naked"}}
                                                margin='dense'
                                                onChange={e => modifyHours(e, course.name, "p2")}/>
                                        </TableCell>
                                        <TableCell align="right" key={course.name + "-cell4"}>
                                            <InputBase
                                                key={course.name + "-input3"}
                                                className={styles.inputBase}
                                                defaultValue={course.hours.p3}
                                                inputProps={{"aria-label": "naked"}}
                                                margin='dense'
                                                onChange={e => modifyHours(e, course.name, "p3")}/>
                                        </TableCell>
                                        <TableCell align="right" key={course.name + "-cell5"}>
                                            <InputBase
                                                key={course.name + "-input4"}
                                                className={styles.inputBase}
                                                defaultValue={course.hours.p4}
                                                inputProps={{"aria-label": "naked"}}
                                                margin='dense'
                                                onChange={e => modifyHours(e, course.name, "p4")}/>
                                        </TableCell>
                                    </TableRow>
                                </>
                            )
                        })}
                        <TableRow
                            key={teacherFullName + "-periodHoursRow"}
                            className={styles.tableRow}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    key={teacherFullName + "-cell1"}
                                    className={`${styles.tableCell} ${styles.thCustomWidth}`}>
                                        <strong>Total Hours: {calcTotalHours(periodTotalHours)}</strong>
                                </TableCell>
                                <TableCell align="center">{periodTotalHours[0]}</TableCell>
                                <TableCell align="center">{periodTotalHours[1]}</TableCell>
                                <TableCell align="center">{periodTotalHours[2]}</TableCell>
                                <TableCell align="center">{periodTotalHours[3]}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <AddCourse
                    teacher={teacherFullName}
                    dropdownList={courses}
                    passToParent={() => log.warn("AddCourse tried to pass something to parent")}/>
            </CardContent>
        </Card>
    )
}

export default withLogging(Teacher)
