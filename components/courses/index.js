import { withLogging } from "gillog";
import { useState } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import useTypographyStyles from "styles/typography";
import useStyles from "./styles.js";
import { InputBase } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddTeacher from "components/courses/add-teacher"
import CreateDropdownTeachers from "utility/create-dropdown-teachers.js"


// TODO: Place the modified JSON in a global variable to be written and read from. Right now each teacher table and table row tracks its own state only

function Courses({ log, data }) {
    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()
    const styles = useStyles();
    
    /* -- old commit
    const [modifiedCourseJson, setmodifiedCourseJson] = useState(data);

    console.log('modifiedCourseJson inside Teachers function');
    console.log(modifiedCourseJson);
    */
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

    // Iterates through every course in modifiedCourseJson and returns a Table component
    const mapCourses = (courses, incomingData, styles, dropdownList) => {

        //Prototype that takes the first letter of a string and makes it into a Material UI Avatar
        //Call this function with "String".makeAvatar()
        String.prototype.makeAvatar = function () {
            return <Avatar className={styles.courseAvatar}>{this.charAt(0)}</Avatar>;
        }

        return (
            <Card className={styles.card}>
                <CardContent>
                    {/*Course name on top of table*/}
                    <Grid
                        container
                        justify="left"
                        alignItems="center">
                        {courses.name.makeAvatar()}
                        {courses.name} <br />
                    </Grid>
                    <Table
                        className={styles.table, styles.nestedElements/* Idea is to have nestedElements to style HTML elements inside Table */}
                        key={courses.courseCode + "table"}
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
                                    <>
                                        <TableRow
                                            key={courses.name + "-courseRow"}
                                            className={styles.tableRow}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                key={courses.name + "-cell1"}
                                                className={styles.tableCell, styles.thCustomWidth}>
                                                {courses.courseCode}<br />{courses.teacher}
                                            </TableCell>
                                            <TableCell align="right" key={courses.name + "-cell2"}>
                                                <InputBase
                                                    key={courses.name + "-input1"}
                                                    className={styles.inputBase}
                                                    defaultValue={courses.hours.p1}
                                                    margin='dense'
                                                    onChange={e => modifyHours(e, courses.courseCode, courses, "p1")}
                                                />
                                            </TableCell>
                                            <TableCell align="right" key={courses.name + "-cell3"}>
                                                <InputBase
                                                    key={courses.name + "-input2"}
                                                    className={styles.inputBase}
                                                    defaultValue={courses.hours.p2}
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    margin='dense'
                                                    onChange={e => modifyHours(e, courses.courseCode, courses, "p2")}
                                                />
                                            </TableCell>
                                            <TableCell align="right" key={courses.name + "-cell4"}>
                                                <InputBase
                                                    key={courses.name + "-input3"}
                                                    className={styles.inputBase}
                                                    defaultValue={courses.hours.p3}
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    margin='dense'
                                                    onChange={e => modifyHours(e, courses.courseCode, courses, "p3")}
                                                />
                                            </TableCell>
                                            <TableCell align="right" key={courses.name + "-cell5"}>
                                                <InputBase
                                                    key={courses.name + "-input4"}
                                                    className={styles.inputBase}
                                                    defaultValue={courses.hours.p4}
                                                    inputProps={{ 'aria-label': 'naked' }}
                                                    margin='dense'
                                                    onChange={e => modifyHours(e, courses.courseCode, courses, "p4")}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </>
                        </TableBody>
                    </Table>

                    <AddTeacher
                        addTeacherData={incomingData}
                        course={courses.teacher}
                        dropdownList={dropdownList}
                        passToParent={passToParent}
                    />

                </CardContent>
            </Card>
        )
    }

    // ====== RENDER ======<<<<

    // Only starts rendering once data from api is ready
    if (data && data.courses) {
        // Creates array of all course's names, which gets sent to the AddCourse component
        const dropdownList = CreateDropdownTeachers(data)
        // Defining storage here seems to guarantee it being client rendered
        let storage = window.localStorage;

        // If localstorage data key exists it renders with that, this allows you to switch between tabs and not lose data
        if (storage.getItem('data')) {
            console.log('localstorage data exists');
            let storageData = JSON.parse(storage.getItem('data'));

            return (
                <Typography className={typographyStyles.typography} variant={"body1"} >
                {testState ? "yes" : "no"}
                    <div className={styles.root}>
                        {storageData.courses.map((course) => mapCourses(course, storageData, styles, dropdownList))}
                    </div>
                </Typography>
            )
        }
        else {
            storage.setItem("data", JSON.stringify(data));
            return (
                <Typography className={typographyStyles.typography} variant={"body1"} >
                    <div className={styles.root}>
                        {modifiedCourseJson.courses.map((course) => mapCourses(course, modifiedCourseJson, styles, dropdownList))}
                    </div>
                </Typography>
            )
        }
    }
    else {
        return (
            "Loading courses..."
        );
    }
}

Courses.id = "courses"

export default withLogging(Courses)
