import {withLogging} from "gillog"

import Grid from "@material-ui/core/Grid"

function About({log, mobile, strings}) {

    // ====== RENDER ======>
    return (
        <Grid item xs={12}>
            {"This is the About page."}
        </Grid>
    )
}

export default withLogging(About)
