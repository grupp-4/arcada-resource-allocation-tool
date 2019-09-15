import {withLogging} from "gillog"

import Grid from "@material-ui/core/Grid"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import MuiTable from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import Input from "@material-ui/core/Input"

import themeParams from "theme/custom-parameters"

function Teachers() {
    const rows = [
        createData("Kurs 1", 50, "-", 10, "-"),
        createData("Kurs 2", 237, 9.0, 37, 4.3),
        createData("Kurs 3", 262, 16.0, 24, 6.0),
        createData("Kurs 4", 305, 3.7, 67, 4.3),
        createData("Kurs 5", 356, 16.0, 49, 3.9),
        createData("Total per period", "1337", "0", "0", "0")
    ]
    function createData(course, p1, p2, p3, p4) {
        return {course, p1, p2, p3, p4}
    }
    return (
        <>
            <Grid container alignItems={"center"} justify={"center"} spacing={themeParams.spacing}>
                <Grid item>
                    <Avatar
                        alt="Dennis Biström"
                        src="/static/dennis.png"/>
                </Grid>
                <Grid item>
                    <Typography>
                        Dennis Biström
                    </Typography>
                    <Typography>
                        IT Lärare
                    </Typography>
                </Grid>
            </Grid>
            <MuiTable size="small">
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
                                <Typography>
                                    {row.course}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Input
                                    defaultValue={row.p1}
                                    inputProps={{"aria-label": "description"}}/>
                            </TableCell>
                            <TableCell>
                                <Input
                                    error
                                    defaultValue={row.p2}
                                    inputProps={{"aria-label": "description"}}/>
                            </TableCell>
                            <TableCell>
                                <Input
                                    defaultValue={row.p3}
                                    inputProps={{"aria-label": "description"}}/>
                            </TableCell>
                            <TableCell>
                                <Input
                                    defaultValue={row.p4}
                                    inputProps={{"aria-label": "description"}}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </>
    )
}

Teachers.id = "teachers"

export default withLogging(Teachers)
