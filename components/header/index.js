import {withLogging} from "gillog"

import Paper from "@material-ui/core/Paper"

// import "./styles.scss"

function Header({log}) {
    return (
        <Paper>
            This is the header.
        </Paper>
    )
}

Header.id = "header"

export default withLogging(Header)
