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
import CreateDropdownList from "utility/create-dropdown-list.js"


// TODO: Place the modified JSON in a global variable to be written and read from. Right now each teacher table and table row tracks its own state only
function Teachers({ log, data }) {
    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles();
    const styles = useStyles();
    const [testState, setTestState] = useState(false);
    let storage, storageData;

    const passToParent = (s) => {
        console.log('S in passtoparent()');
        console.log(s);
        console.log('testState init:');
        console.log(testState);
        setTestState(s);
        console.log('testState after:');
        console.log(testState);

    }



    const modifyHours = (e, courseC, courses, period) => {
        e.persist(); // This allows event to be read during function execution, in cost of performance

        // Takes the element's value
        const newHour = parseInt(e.target.value, 10);
        // Finds position of the modified course
        const index = storageData.courses.findIndex(x => x.courseCode == courseC);
        // Updates the targeted course with new hour
        storageData.courses[index].hours[period] = newHour;

        console.log('storageData.courses[index].hours[period]');
        console.log(storageData.courses[index].hours[period]);

        // // Creates/overrides localstorage "data" key with the updated storageData
        storage.setItem("data", JSON.stringify(storageData));

        // Updates modifiedJson
        /*
        setModifiedJson(prevState => ({
            ...prevState, // ...prevState means it adds all unmodified properties of modifiedJson, same with ...el
            courses: prevState.courses.map(el => {
                if (el.courseCode === courseC) {
                    let hoursObj = el.hours;
                    hoursObj[period] = newHour;
                    return { ...el, hours: hoursObj }
                }
                else { return (el) }
            }
            ),
        }));
        */


    }

    // Iterates through every teacher in the incoming data and returns a Table component
    const mapTeachers = (teacher, incomingData, styles, dropdownList) => {
        const courses = incomingData.courses;
        const teacherFullName = `${teacher.firstName} ${teacher.lastName}`;
        let assignedCourses = courses.filter((course) => { return (course.teacher == teacherFullName) }); // Makes array of courses that match teacher name

        return (
            <Card className={styles.card}>
                <CardContent>
                    {/*Teacher's name on top of table*/}
                    <Grid
                        container
                        justify="center"
                        alignItems="center">
                        {teacher.lastName}, {teacher.firstName} <br />
                    </Grid>
                    <Table
                        className={styles.table, styles.nestedElements/* Idea is to have nestedElements to style HTML elements inside Table */}
                        key={teacherFullName + "table"}
                        // Not working
                        classes={{
                            root: styles.table.root, // class name, e.g. `classes-nesting-root-x`
                            label: styles.table.label, // class name, e.g. `classes-nesting-label-x`
                        }}
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
                                                className={styles.tableCell, styles.thCustomWidth}>
                                                {element.name}<br />{element.courseCode}
                                            </TableCell>
                                            <TableCell align="right" key={element.name + "-cell2"}>
                                                <InputBase
                                                    key={element.name + "-input1"}
                                                    className={styles.inputBase}
                                                    defaultValue={element.hours.p1}
                                                    margin='dense'
                                                    onChange={e => modifyHours(e, element.courseCode, courses, "p1")}
                                                />
                                            </TableCell>
                                            <TableCell align="right" key={element.name + "-cell3"}>
                                                <InputBase
                                                    key={element.name + "-input2"}
                                                    className={styles.inputBase}
                                                    defaultValue={element.hours.p2}
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    margin='dense'
                                                    onChange={e => modifyHours(e, element.courseCode, courses, "p2")}
                                                />
                                            </TableCell>
                                            <TableCell align="right" key={element.name + "-cell4"}>
                                                <InputBase
                                                    key={element.name + "-input3"}
                                                    className={styles.inputBase}
                                                    defaultValue={element.hours.p3}
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    margin='dense'
                                                    onChange={e => modifyHours(e, element.courseCode, courses, "p3")}
                                                />
                                            </TableCell>
                                            <TableCell align="right" key={element.name + "-cell5"}>
                                                <InputBase
                                                    key={element.name + "-input4"}
                                                    className={styles.inputBase}
                                                    defaultValue={element.hours.p4}
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    margin='dense'
                                                    onChange={e => modifyHours(e, element.courseCode, courses, "p4")}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </>
                                )
                            })}
                        </TableBody>
                    </Table>

                    <AddCourse
                        addCourseData={incomingData}
                        teacher={teacherFullName}
                        dropdownList={dropdownList}
                        passToParent={passToParent}
                    />

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
                    {testState ? "yes" : "no"}
                    <div className={styles.root}>
                        {storageData.teachers.map((teacher) => mapTeachers(teacher, storageData, styles, dropdownList))}
                    </div>
                </Typography>
            )
        }
        else {
            storage.setItem("data", JSON.stringify(data));
            return (
                <Typography className={typographyStyles.typography} variant={"body1"} >
                    <div className={styles.root}>
                        {data.teachers.map((teacher) => mapTeachers(teacher, data, styles, dropdownList))}
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
