import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from "../components/styles.scss";
import TeacherContainer from "components/teacher-container.js";


/****** CODE FOR THE FIELDS AND FORM **********/

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import clsx from 'clsx';
import { StylesContext } from '@material-ui/styles/StylesProvider';
const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

const fieldUseStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: 0,
        marginRight: 0,
    },
    input: {
        margin: theme.spacing(0),
    },
    dense: {
        marginTop: theme.spacing(0),
    },
    menu: {
        width: 200,
    },
}));








/********* END FIELDS **********/

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        marginTop: theme.spacing(3),
        width: '100%',
        overflowX: 'auto',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 650,
    },
}));

function createData(course, p1, p2, p3, p4) {
    return { course, p1, p2, p3, p4 };
}

const rows = [
    createData('Kurs 1', 50, "-", 10, "-"),
    createData('Kurs 2', 237, 9.0, 37, 4.3),
    createData('Kurs 3', 262, 16.0, 24, 6.0),
    createData('Kurs 4', 305, 3.7, 67, 4.3),
    createData('Kurs 5', 356, 16.0, 49, 3.9),
    createData('Total per period', "1337", "0", "0", "0"),
];

export default function DenseTable() {
    // Text fields data
    const fieldClasses = fieldUseStyles();
    const [values, setValues] = React.useState({
        name: 'DENNIIIIS',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });
    // End

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    const classes = useStyles();

    return (
        <div className={styles.teacher}>
            <TeacherContainer />
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <form className={fieldClasses.container} noValidate autoComplete="off">
                        <Table className={classes.table} size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Perioder</TableCell>
                                    <TableCell align="center">Period 1</TableCell>
                                    <TableCell align="center">Period 2</TableCell>
                                    <TableCell align="center">Period 3</TableCell>
                                    <TableCell align="center">Period 4</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            <Input
                                                disabled
                                                defaultValue={row.course}
                                                className={classes.input}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell align="right">

                                            <Input
                                                defaultValue={row.p1}
                                                className={classes.input}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                            />
                                        </TableCell>
                                        {/*<TableCell align="right">{row.calories}</TableCell>*/}
                                        <TableCell align="right">
                                            <Input
                                                error
                                                defaultValue={row.p2}
                                                className={classes.input}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                            /></TableCell>
                                        <TableCell align="right">
                                            <Input
                                                defaultValue={row.p3}
                                                className={classes.input}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <Input
                                                defaultValue={row.p4}
                                                className={classes.input}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </form>
                </Paper>
            </div>
        </div>
    );
}