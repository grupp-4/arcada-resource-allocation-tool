import {withLogging} from "gillog"

import {useState} from "react"

import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery"

import Grid from "@material-ui/core/Grid"
import Title from "components/about/title"
import Features from "components/about/features"
import Creators from "components/about/creators"
import Powerers from "components/about/powerers"
import Footer from "components/about/footer"

import useStyles from "styles/about"

function About({log, mobile, strings: {about: strings}}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const [state, setState] = useState({featuresVisibility: false, inhibitPageFold: false})

    // ====== EVENT HANDLERS ======>
    function setFeaturesVisibility(newState) {
        setState(prevState => ({...prevState, featuresVisibility: newState}))
    }
    function setInhibitPageFold(newState) {
        setState(prevState => ({...prevState, inhibitPageFold: newState}))
    }

    // ====== RENDER ======>
    return (
        <div style={{height: state.featuresVisibility || state.inhibitPageFold ? null : "100%", overflow: "auto"}}>
            <Grid
                className={state.featuresVisibility || state.inhibitPageFold ? `${styles.marginBottom} ${styles.pageFold}` : styles.pageFold}
                component={"main"}
                alignContent={"start"}
                direction={"column"}
                container>
                    <Title/>
                    <Features featuresVisibility={state.featuresVisibility} setFeaturesVisibility={setFeaturesVisibility} setInhibitPageFold={setInhibitPageFold} strings={strings}/>
                    <Creators strings={strings}/>
                    <Powerers strings={strings}/>
            </Grid>
            <Footer strings={strings}/>
        </div>
    )
}

export default withLogging(About)
