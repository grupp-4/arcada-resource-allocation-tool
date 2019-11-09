import {withLogging} from "gillog"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import useStyles from "./styles"

function Feature({log, icon, heading, description, width}) {

    // ====== HOOKS ======>
    const styles = useStyles()

    // ====== RENDER ======>
    return (
        <Grid
            className={styles.feature}
            container
            direction={"column"}
            item
            style={{width: width}}>
                {icon}
                <Typography variant={"h6"} variantMapping={{h6: "h4"}}>
                    {heading}
                </Typography>
                <Typography variant={"body1"}>
                    {description}
                </Typography>
        </Grid>
    )
}

export default withLogging(Feature)
