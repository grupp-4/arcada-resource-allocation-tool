import makeStyles from "@material-ui/core/styles/makeStyles"

import {red, green, blue} from "@material-ui/core/colors"

import params from "../../theme/custom-parameters"

function styles(theme) {
    return {
        cardHeader: {
            textAlign: "left",
        },
        thCustomWidth: {
            width: 300,
        },
        warning: {
            "& input": {
                color: red[400],
                borderBottom: "1px solid " + red[400],
                fontWeight: "bold",
                textAlign: "center",
            },
            '& strong': {
                color: red[400],
            },
            '& p': {
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
                backgroundColor: "red",
            }
        },
        tableRow: {
            "&:nth-of-type(odd)": {
                backgroundColor: theme.palette.background.default,
            },
            "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.common.white,
            }
        },
        // This is still not working
        table: {
            root: {
                backgroundColor: "red",
            },
            minWidth: 0,
        },
        paper: {
            root: {
                width: "100%",
                marginTop: theme.spacing(3),
                overflowX: "auto",
            }
        },
        bullet: {
            display: "inline-block",
            margin: "0 2px",
            transform: "scale(0.8)",
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
        inputBase: {
            "& input": {
                borderBottom: "1px solid",
                textAlign: "center",
            }
        }
    }
}

// Exporting the hook that the makeStyles function returns
export default makeStyles(styles)
