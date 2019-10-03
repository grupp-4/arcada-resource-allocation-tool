import { makeStyles } from '@material-ui/core/styles';
import { red, blue, green } from '@material-ui/core/colors';

function styles(theme) {
    return (
        {
            thCustomWidth: {
                width: 300,
            },
            warning: {
                '& input': {
                    color: red[400],
                    borderBottom: '1px solid ' + red[400],
                    fontWeight: "bold"
                },
                '& strong': {
                    color: red[400],
                },
                color: red[400],
            },
            teacherWarning: {
                border: "2px solid" + red[400],
            },
            nestedElements: {
                "& th": {
                    padding: "7px 0px 7px 10px",
                },
                "& td": {
                    padding: "7px 20px 7px 10px",
                },
                "& input": {
                    padding: "7px 20px 7px 10px",
                    textAlign: "center",
                }
            },
            tableCell: {
                "& head": {
                    backgroundColor: "red",
                    color: theme.palette.common.white,
                    body: {
                        fontSize: 14,
                    }
                },
                root: {
                    backgroundColor: 'red'
                },

            },
            tableRow: {
                '&:nth-of-type(odd)': {
                    backgroundColor: theme.palette.background.default,
                },
                '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                    color: theme.palette.common.white,
                }
            },
            root: {
                width: '100%',
                marginTop: theme.spacing(3),
                width: '100%',
                overflowX: 'auto',
                marginBottom: theme.spacing(2),
            },
            paper: {
                root: {
                    width: '100%',
                    marginTop: theme.spacing(3),
                    overflowX: 'auto',
                },
            },
            card: {
                minWidth: 275,
                margin: 20,
            },
            title: {
                fontSize: 14,
            },
            inputBase: {
                /* Applying styles to children elements is like this, "& elementName" remember the space*/
                '& input': {
                    borderBottom: '1px solid black',
                },
            },
        }
    )
}

// Exporting the hook that the makeStyles function returns
export default makeStyles(styles)