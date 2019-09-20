import { makeStyles } from '@material-ui/core/styles';

function styles(theme) {
    return (
        {
            tableCell: {
                '& head': {
                    backgroundColor: theme.palette.common.black,
                    color: theme.palette.common.white,
                    body: {
                        fontSize: 14,
                    }
                },
            },
            tableRowRoot: {
                '&:nth-of-type(odd)': {
                    backgroundColor: theme.palette.background.default,
                },
            },
            root: {
                width: '100%',
                marginTop: theme.spacing(3),
                width: '100%',
                overflowX: 'auto',
                marginBottom: theme.spacing(2),
            },
            table: {
                minWidth: 0,
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
                margin: 20
            },
            bullet: {
                display: 'inline-block',
                margin: '0 2px',
                transform: 'scale(0.8)',
            },
            title: {
                fontSize: 14,
            },
            pos: {
                marginBottom: 12,
            },
        }
    )
}

// Exporting the hook that the makeStyles function returns
export default makeStyles(styles)