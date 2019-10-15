import {withLogging} from "gillog"

import Grid from "@material-ui/core/Grid"
import Title from "components/about/title"
import Creators from "components/about/creators"
import Powerers from "components/about/powerers"
import Footer from "components/about/footer"

import useStyles from "styles/about"

function About({log, mobile, strings: {about: strings}}) {

    // ====== HOOKS ======>
    const styles = useStyles()

    // ====== RENDER ======>
    return (
        <div style={{height: "100%", overflow: "auto"}}>
            <Grid
                className={styles.pageFold}
                component={"main"}
                alignContent={"start"}
                direction={"column"}
                container>
                    <Title/>
                    <Creators strings={strings}/>
                    <Powerers strings={strings}/>
            </Grid>
            <Footer strings={strings}/>
        </div>
    )
}

export default withLogging(About)
