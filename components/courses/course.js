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

import AddTeacher from "./add-teacher"

import useStyles from "./styles"

function Course({log, setHours, setTeacher, invalidate, course, teachers, data, mobile, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()

    // ====== FUNCTIONS ======>
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
                <Grid container justify={"flex-start"} alignItems={"center"}>
                    {course.name}<br/>
                </Grid>
                <Table
                    className={`${styles.table} ${styles.nestedElements}`}
                    key={course.courseCode + "-table"}
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
                            <TableRow key={course.name + "-courseRow"} className={styles.tableRow}>
                                <TableCell
                                    key={course.name + "-cell1"}
                                    className={`${styles.tableCell} ${styles.thCustomWidth}`}
                                    component={"th"}
                                    scope={"row"}>
                                        {course.courseCode}<br/>{course.teacher}
                                </TableCell>
                                <TableCell align={"right"} key={course.name + "-cell2"}>
                                    <InputBase
                                        key={course.name + "-input1"}
                                        className={styles.inputBase}
                                        onChange={event => modifyHours(event, course.name,"p1")}
                                        defaultValue={course.hours.p1}
                                        margin={"dense"}
                                        inputProps={{"aria-label": "naked"}}/>
                                </TableCell>
                                <TableCell align={"right"} key={course.name + "-cell3"}>
                                    <InputBase
                                        key={course.name + "-input2"}
                                        className={styles.inputBase}
                                        onChange={event => modifyHours(event, course.name,"p2")}
                                        defaultValue={course.hours.p2}
                                        margin={"dense"}
                                        inputProps={{"aria-label": "naked"}}/>
                                </TableCell>
                                <TableCell align={"right"} key={course.name + "-cell4"}>
                                    <InputBase
                                        key={course.name + "-input3"}
                                        className={styles.inputBase}
                                        onChange={event => modifyHours(event, course.name,"p3")}
                                        defaultValue={course.hours.p3}
                                        margin={"dense"}
                                        inputProps={{"aria-label": "naked"}}/>
                                </TableCell>
                                <TableCell align={"right"} key={course.name + "-cell5"}>
                                    <InputBase
                                        key={course.name + "-input4"}
                                        className={styles.inputBase}
                                        onChange={event => modifyHours(event, course.name,"p4")}
                                        defaultValue={course.hours.p4}
                                        margin={"dense"}
                                        inputProps={{"aria-label": "naked"}}/>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                </Table>
                <AddTeacher
                    setTeacher={setTeacher}
                    addTeacher={invalidate}
                    course={course.name}
                    dropdownList={teachers}/>
            </CardContent>
        </Card>
    )
}

export default withLogging(Course)
