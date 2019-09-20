import { withLogging } from "gillog";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from "@material-ui/core/Typography";
import useTypographyStyles from "styles/typography";
import useStyles from "./styles.js";
import { StyledTableCell, StyledTableRow } from "components/teachers/styled-components";
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";





const mapTeachers = (teacher, data, styles) => {
    const courses = data.courses;
    const teacherFullName = `${teacher.firstName} ${teacher.lastName}`;
    let assignedCourses = courses.filter((course) => {


        return (course.teacher == teacherFullName)
    });

    console.log("Assigned courses:");
    console.log(assignedCourses);
    return (
        // TODO: Skapa skild tabell för varje lärare
        <>
            <Card className={styles.card}>
                <CardContent>
                    <Grid container justify="center" alignItems="center">
                        {teacher.lastName}, {teacher.firstName} <br />
                    </Grid>
                    <Table className={styles.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Course</TableCell>
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
                                        <TableRow key={element.name}>
                                            <TableCell component="th" scope="row">
                                                {element.name + " " + element.courseCode}
                                            </TableCell>
                                            <TableCell align="right">{element.hours}</TableCell>
                                            <TableCell align="right">{element.hours}</TableCell>
                                            <TableCell align="right">{element.hours}</TableCell>
                                            <TableCell align="right">{element.hours}</TableCell>
                                        </TableRow>
                                    </>
                                )

                            })}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}


function Teachers({ log, data }) {
    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()
    const styles = useStyles();


    // ====== RENDER ======>
    // TODO: create this component

    if (data && data.teachers) {
        return (
            <Typography className={typographyStyles.typography} variant={"body1"} >
                <div className={styles.root}>
                    {
                        data.teachers.map((teacher) => mapTeachers(teacher, data, styles))
                    }

                    <Card>Hello</Card>
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
