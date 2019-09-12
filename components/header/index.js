import {withLogging} from "gillog"

import Paper from "@material-ui/core/Paper"

import useStyles from "styles/paper"

function Header({log}) {
    const styles = useStyles()
    return (
        <Paper className={styles.paper}>
            This is the header.
        </Paper>
    )
}

Header.id = "header"

export default withLogging(Header)
