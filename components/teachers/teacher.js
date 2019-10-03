import {withLogging} from "gillog"

import {Fragment} from "react"

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

function Teacher({log, setHours, setTeacher, invalidate, teacher, courses, data, mobile, strings}) {

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
        <Card className={mobile ? styles.cardMobile : styles.cardDesktop}>
            <CardContent>
                <Grid container justify={"center"} alignItems={"center"}>
                    {teacherFullName}<br/>
                </Grid>
                <Table
                    className={`${styles.table} ${styles.nestedElements}`}
                    key={teacherFullName + "-table"}
                    classes={{root: styles.table.root, label: styles.table.label}}>
                        <TableHead>
                            <TableRow>
                                <TableCell className={styles.tableCell}>Course</TableCell>
                                <TableCell align={"left"}>Period 1</TableCell>
                                <TableCell align={"left"}>Period 2</TableCell>
                                <TableCell align={"left"}>Period 3</TableCell>
                                <TableCell align={"left"}>Period 4</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {assignedCourses.map((course, index) => {
                                periodTotalHours[0] += course.hours.p1
                                periodTotalHours[1] += course.hours.p2
                                periodTotalHours[2] += course.hours.p3
                                periodTotalHours[3] += course.hours.p4
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
                                                    key={course.name + "-input1"}
                                                    className={styles.inputBase}
                                                    onChange={event => modifyHours(event, course.name, "p1")}
                                                    defaultValue={course.hours.p1}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                            <TableCell align="right" key={course.name + "-cell3"}>
                                                <InputBase
                                                    key={course.name + "-input2"}
                                                    className={styles.inputBase}
                                                    onChange={event => modifyHours(event, course.name, "p2")}
                                                    defaultValue={course.hours.p2}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                            <TableCell align="right" key={course.name + "-cell4"}>
                                                <InputBase
                                                    key={course.name + "-input3"}
                                                    className={styles.inputBase}
                                                    onChange={event => modifyHours(event, course.name, "p3")}
                                                    defaultValue={course.hours.p3}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                            <TableCell align="right" key={course.name + "-cell5"}>
                                                <InputBase
                                                    key={course.name + "-input4"}
                                                    className={styles.inputBase}
                                                    onChange={event => modifyHours(event, course.name, "p4")}
                                                    defaultValue={course.hours.p4}
                                                    margin={"dense"}
                                                    inputProps={{"aria-label": "naked"}}/>
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                )
                            })}
                            <TableRow
                                key={teacherFullName + "-periodHoursRow"}
                                className={styles.tableRow}>
                                    <TableCell
                                        key={teacherFullName + "-cell1"}
                                        className={`${styles.tableCell} ${styles.thCustomWidth}`}
                                        component={"th"}
                                        scope={"row"}>
                                            <strong>Total Hours: {calcTotalHours(periodTotalHours)}</strong>
                                    </TableCell>
                                    <TableCell align={"center"}>{periodTotalHours[0]}</TableCell>
                                    <TableCell align={"center"}>{periodTotalHours[1]}</TableCell>
                                    <TableCell align={"center"}>{periodTotalHours[2]}</TableCell>
                                    <TableCell align={"center"}>{periodTotalHours[3]}</TableCell>
                            </TableRow>
                        </TableBody>
                </Table>
                <AddCourse
                    setTeacher={setTeacher}
                    addCourse={invalidate}
                    teacher={teacherFullName}
                    dropdownList={courses}/>
            </CardContent>
        </Card>
    )
}

export default withLogging(Teacher)