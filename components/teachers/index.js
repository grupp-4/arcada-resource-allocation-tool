import { withLogging } from "gillog";
import { useState } from "react";
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
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import AddCourse from "components/teachers/add-course"
import CreateDropdownList from "utility/create-dropdown-list.js"



function Teachers({ log, data }) {
    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()
    const styles = useStyles();
    const [modifiedJson, setModifiedJson] = useState(data);

    const modifyHours = (e, courseC, courses, period) => {
        e.persist();
        // https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
        // Not even this might be needed, because in the setModifiedJson it doesn't use the courses parameter
        //courses.find(x => x.courseCode === courseC).hours = e.target.value; // Spooky action
        //let newHour = courses.find(x => x.courseCode === courseC).hours.period;
        //        let index = courses.findIndex(x => x.courseCode === courseC); Probably not needed anymore
        let newHour = e.target.value;

        console.log('modifiedjson inside modifyHours()');
        console.log(modifiedJson);



        setModifiedJson(prevState => ({

            ...prevState,
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
        /*
                setModifiedJson(prevState => ({
                    
                    courses: prevState.courses.map(
                        el => el.courseCode === courseC ? { ...el, hours: { [period]: newHour } } : el) //Skapa en till map för hours objektet
                        ,
                    teachers: prevState.teachers
                }));
        */
    };


    const mapTeachers = (teacher, incomingData, styles, dropdownList) => {
        const courses = incomingData.courses;
        const teacherFullName = `${teacher.firstName} ${teacher.lastName}`;
        let assignedCourses = courses.filter((course) => {


            return (course.teacher == teacherFullName)
        });

        return (
            <>
                <Card className={styles.card}>
                    <CardContent>
                        <Grid container justify="center" alignItems="center">
                            {teacher.lastName}, {teacher.firstName} <br />
                        </Grid>
                        <Table className={styles.table} key={teacherFullName + "table"}
                            // Not yet worked out, perhaps className is overriding this
                            classes={{
                                root: styles.table.root, // class name, e.g. `classes-nesting-root-x`
                                label: styles.table.label, // class name, e.g. `classes-nesting-label-x`
                            }}
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell className={styles.tableCell}>Course</TableCell>
                                    <TableCell align="right">Period 1</TableCell>
                                    <TableCell align="right">Period 2</TableCell>
                                    <TableCell align="right">Period 3</TableCell>
                                    <TableCell align="right">Period 4</TableCell>
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
                                                    className={styles.tableCell}>
                                                    {element.name + " " + element.courseCode}
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
                                                        className={styles.margin}
                                                        defaultValue={element.hours.p2}
                                                        inputProps={{ 'aria-label': 'naked' }}
                                                        margin='dense'
                                                        onChange={e => modifyHours(e, element.courseCode, courses, "p2")}
                                                    />
                                                </TableCell>
                                                <TableCell align="right" key={element.name + "-cell4"}>
                                                    <InputBase
                                                        key={element.name + "-input3"}
                                                        className={styles.margin}
                                                        defaultValue={element.hours.p3}
                                                        inputProps={{ 'aria-label': 'naked' }}
                                                        margin='dense'
                                                        onChange={e => modifyHours(e, element.courseCode, courses, "p3")}
                                                    />
                                                </TableCell>
                                                <TableCell align="right" key={element.name + "-cell5"}>
                                                    <InputBase
                                                        key={element.name + "-input4"}
                                                        className={styles.margin}
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
                        />
                    </CardContent>
                </Card>
            </>
        )
    }

    // ====== RENDER ======>
    // TODO: create this component

    if (data && data.teachers) {
        const dropdownList = CreateDropdownList(modifiedJson)


        return (
            <Typography className={typographyStyles.typography} variant={"body1"} >
                <div className={styles.root}>
                    {

                        modifiedJson.teachers.map((teacher) => mapTeachers(teacher, modifiedJson, styles, dropdownList))
                    }
                </div>
            </Typography>
        );
    }
    else {
        return (
            "Loading teachers..."
        );
    }
}

Teachers.id = "teachers"

export default withLogging(Teachers)
