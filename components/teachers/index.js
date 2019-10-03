import { withLogging } from "gillog";
import { useState, useEffect } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from "@material-ui/core/Typography";
import useTypographyStyles from "styles/typography";
import useStyles from "./styles.js";
import { InputBase } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddCourse from "components/teachers/add-course"
import CreateDropdownList from "utility/create-dropdown-list.js";
import warning from "utility/warning.js";


// TODO: Implement search function
function Teachers({ log, data }) {
    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles();
    const styles = useStyles();
    const [testState, setTestState] = useState(false);
    const [courseHour, setCourseHour] = useState(null);
    let storage, storageData;

    const passToParent = (s) => {
        setTestState(s);
    }

    const calcTotalHours = (arr) => {
        return (arr[0] + arr[1] + arr[2] + arr[3])
    }

    const modifyHours = (e, course, period) => {
        e.persist(); // This allows event to be read during function execution, in cost of performance
        // Takes the element's value
        const newHour = parseInt(e.target.value, 10);
        // Finds position of the modified course
        const index = storageData.courses.findIndex(x => x.name == course);
        // Updates the targeted course with new hour
        storageData.courses[index].hours[period] = newHour;
        // // Creates/overrides localstorage "data" key with the updated storageData
        storage.setItem('data', JSON.stringify(storageData));
        setCourseHour(newHour);
    }

    // Iterates through every teacher in the incoming data and returns a Table component
    const mapTeachers = (teacher, incomingData, styles, dropdownList) => {
        const courses = incomingData.courses;
        const teacherFullName = `${teacher.firstName} ${teacher.lastName}`;
        let assignedCourses = courses.filter((course) => { return (course.teacher == teacherFullName) }); // Makes array of courses that match teacher name
        let periodTotalHours = [0, 0, 0, 0];

        return (
            <Card className={styles.card}>
                <CardContent>
                    {/*Teacher's name on top of table*/}
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        forceAnUpdate={courseHour}
                    >
                        {teacher.lastName}, {teacher.firstName}  {}<br />
                    </Grid>
                    <Table
                        className={`${styles.table} ${styles.nestedElements}`/* Idea is to have nestedElements to style HTML elements inside Table */}
                        key={teacherFullName + "table"}
                    >
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
                            {assignedCourses.map(element => {
                                // Adds this courses hours together with potentially other courses
                                periodTotalHours[0] += element.hours.p1;
                                periodTotalHours[1] += element.hours.p2;
                                periodTotalHours[2] += element.hours.p3;
                                periodTotalHours[3] += element.hours.p4;

                                return (
                                    <>
                                        <TableRow
                                            key={element.name + "-courseRow"}
                                            className={styles.tableRow}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                key={element.name + "-cell1"}
                                                className={`${styles.tableCell} ${styles.thCustomWidth}`}>
                                                {element.name}<br />{element.courseCode}
                                            </TableCell>
                                            <TableCell align="right" key={element.name + "-cell2"}>
                                                <InputBase
                                                    key={element.name + "-input1"}
                                                    className={warning("period", "p1", element) ? `${styles.warning}` : `${styles.inputBase}`}
                                                    defaultValue={element.hours.p1}
                                                    margin='dense'
                                                    onChange={e => modifyHours(e, element.name, "p1")}
                                                />
                                            </TableCell>
                                            <TableCell align="right" key={element.name + "-cell3"}>
                                                <InputBase
                                                    key={element.name + "-input2"}
                                                    className={warning("period", "p2", element) ? `${styles.warning}` : `${styles.inputBase}`}
                                                    defaultValue={element.hours.p2}
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    margin='dense'
                                                    onChange={e => modifyHours(e, element.name, "p2")}
                                                />
                                            </TableCell>
                                            <TableCell align="right" key={element.name + "-cell4"}>
                                                <InputBase
                                                    key={element.name + "-input3"}
                                                    className={warning("period", "p3", element) ? `${styles.warning}` : `${styles.inputBase}`}
                                                    defaultValue={element.hours.p3}
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    margin='dense'
                                                    onChange={e => modifyHours(e, element.name, "p3")}
                                                />
                                            </TableCell>
                                            <TableCell align="right" key={element.name + "-cell5"}>
                                                <InputBase
                                                    key={element.name + "-input4"}
                                                    className={warning("period", "p4", element) ? `${styles.warning}` : `${styles.inputBase}`}
                                                    defaultValue={element.hours.p4}
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    margin='dense'
                                                    onChange={e => modifyHours(e, element.name, "p4")}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </>
                                )
                            })}

                            <TableRow
                                key={teacherFullName + "-periodHoursRow"}
                                className={styles.tableRow}
                            >
                                <TableCell
                                    component="th"
                                    scope="row"
                                    key={teacherFullName + "-cell1"}
                                    className={warning("totalHours", "asd", calcTotalHours(periodTotalHours)) ? `${styles.warning}` : (`${styles.tableCell} ${styles.thCustomWidth}`)}
                                >
                                    <strong>Total Hours: {calcTotalHours(periodTotalHours)}</strong>
                                </TableCell>
                                <TableCell align="center"
                                    className={warning("periodTotal", 0, periodTotalHours) ? `${styles.warning}` : (`${styles.tableCell}`)}>
                                    {periodTotalHours[0]}
                                </TableCell>
                                <TableCell align="center"
                                    className={warning("periodTotal", 1, periodTotalHours) ? `${styles.warning}` : (`${styles.tableCell}`)}>
                                    {periodTotalHours[1]}
                                </TableCell>
                                <TableCell align="center"
                                    className={warning("periodTotal", 2, periodTotalHours) ? `${styles.warning}` : (`${styles.tableCell}`)}>
                                    {periodTotalHours[2]}
                                </TableCell>
                                <TableCell align="center"
                                    className={warning("periodTotal", 3, periodTotalHours) ? `${styles.warning}` : (`${styles.tableCell}`)}>
                                    {periodTotalHours[3]}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>


                    <div className={warning("teacherCourses", "", assignedCourses) ? `${styles.teacherWarning}` : null}>
                        <AddCourse
                            addCourseData={incomingData}
                            teacher={teacherFullName}
                            dropdownList={dropdownList}
                            passToParent={passToParent}
                        />
                    </div>


                </CardContent>
            </Card>
        )
    }

    // ====== RENDER ======>

    // Only starts rendering once data from api is ready
    if (data && data.teachers) {
        // Creates array of all course's names, which gets sent to the AddCourse component
        const dropdownList = CreateDropdownList(data);
        // Defining storage here seems to guarantee it being client rendered
        storage = window.localStorage;

        // If localstorage data key exists it renders with that, this allows you to switch between tabs and not lose data
        if (storage.getItem('data')) {
            console.log('localstorage data exists');
            storageData = JSON.parse(storage.getItem('data'));
            return (
                <Typography className={typographyStyles.typography} variant={"body1"} >
                    {testState ? "" : ""}
                    <div className={styles.root}>
                        {storageData.teachers.map((teacher) => mapTeachers(teacher, storageData, styles, dropdownList))}
                    </div>
                </Typography>
            )
        }
        else {
            storage.setItem("data", JSON.stringify(data));
            storageData = JSON.parse(storage.getItem('data'));
            return (
                <Typography className={typographyStyles.typography} variant={"body1"} >
                    <div className={styles.root}>
                        {storageData.teachers.map((teacher) => mapTeachers(teacher, storageData, styles, dropdownList))}
                    </div>
                </Typography>
            )
        }
    }
    else {
        return (
            "Loading teachers..."
        );
    }
}

Teachers.id = "teachers"

export default withLogging(Teachers)
