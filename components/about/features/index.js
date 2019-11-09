import {withLogging} from "gillog"

import {useEffect} from "react"

import useTheme from "@material-ui/core/styles/useTheme"
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Collapse from "@material-ui/core/Collapse"
import Container from "@material-ui/core/Container"

import Feature from "./feature"

import features from "./features"

import useStyles from "./styles"

import themeParams from "theme/custom-parameters"

function Features({log, featuresVisibility, setFeaturesVisibility, setInhibitPageFold, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const theme = useTheme()
    const shortScreen = useMediaQuery("@media (max-height: 1256px)")
    const ultraShortScreen = useMediaQuery("@media (max-height: 1176px)")
    const superUltraShortScreen = useMediaQuery("@media (max-height: 666px)")
    const superDuperUltraShortScreen = useMediaQuery("@media (max-height: 470px)")
    const thinScreen = useMediaQuery(`@media (max-width: ${theme.breakpoints.values.md * 1.05}px)`, {defaultMatches: true})

    useEffect(() => {
        if (!(ultraShortScreen || thinScreen)) setFeaturesVisibility(false)
    }, [ultraShortScreen, thinScreen])
    useEffect(() => {
        log.debug("ultraShortScreen", ultraShortScreen)
        log.debug("superUltraShortScreen", superUltraShortScreen)
        log.debug("superDuperUltraShortScreen", superDuperUltraShortScreen)
        log.debug("SUM", (superUltraShortScreen && thinScreen) || superDuperUltraShortScreen)
        setInhibitPageFold((superUltraShortScreen && thinScreen) || superDuperUltraShortScreen)
    }, [superUltraShortScreen, superDuperUltraShortScreen, thinScreen])

    // ====== FUNCTIONS ======>
    function getFeaturesMobile() {
        return features.reduce((accumulator, featuresRow, row) => ([
            ...accumulator,
            ...featuresRow.map(({slug, icon}, index) => (
                <Feature
                    key={slug}
                    icon={icon}
                    heading={strings.features[row][index].heading}
                    description={strings.features[row][index].description}
                    width={thinScreen ? themeParams.featureMobileWidth1 : themeParams.featureMobileWidth2}/>
            ))
        ]), [])
    }
    function getFeaturesDesktop() {
        return features.map((featuresRow, row) => {
            featuresRow = featuresRow.map(({slug, icon}, index) => (
                <Feature
                    key={slug}
                    icon={icon}
                    heading={strings.features[row][index].heading}
                    description={strings.features[row][index].description}
                    width={themeParams.featureDesktopWidth}/>
            ))
            return (
                <Grid
                    key={row + 1}
                    className={styles.subGrid}
                    container
                    item
                    justify={"center"}
                    spacing={themeParams.spacing}>
                    {featuresRow}
                </Grid>
            )
        })
    }

    // ====== RENDER ======>
    return (
        <Grid
            className={styles.container}
            container
            direction={"column"}
            item>
                {ultraShortScreen || thinScreen ? (
                    <>
                        <Grid
                            onClick={() => setFeaturesVisibility(!featuresVisibility)}
                            alignItems={"baseline"}
                            container
                            direction={"row"}
                            item
                            justify={"center"}>
                                <Typography
                                    className={styles.headingMobile}
                                    align={"center"}
                                    variant={"overline"}
                                    variantMapping={{overline: "h3"}}>
                                        {strings.featuresHeading}
                                </Typography>
                                <Button variant={"outlined"}>
                                    {featuresVisibility ? strings.collapse : strings.expand}
                                </Button>
                        </Grid>
                        <Collapse in={featuresVisibility}>
                            <Grid
                                className={styles.gridMobile}
                                container
                                item
                                justify={"center"}
                                spacing={themeParams.spacing}>
                                    {getFeaturesMobile()}
                            </Grid>
                            <Grid
                                className={styles.gridMobile}
                                container
                                item
                                justify={"center"}
                                spacing={themeParams.spacing}>
                                    <Button
                                        onClick={() => setFeaturesVisibility(false)}
                                        variant={"outlined"}>
                                            {strings.collapse}
                                    </Button>
                            </Grid>
                        </Collapse>
                    </>
                ) : (
                    <>
                        <Grid
                            component={Typography}
                            align={"center"}
                            item
                            variant={"overline"}
                            variantMapping={{overline: "h3"}}>
                                {strings.featuresHeading}
                        </Grid>
                        <Container
                            className={shortScreen ? styles.gridMobile : styles.gridDesktop}
                            component={Grid}
                            container
                            direction={shortScreen ? "row" : "column"}
                            item
                            justify={"center"}
                            spacing={shortScreen ? themeParams.spacing : 0}
                            style={{maxWidth: shortScreen ? theme.breakpoints.values.md * 1.05 : null}}>
                                {shortScreen ? getFeaturesMobile() : getFeaturesDesktop()}
                        </Container>
                    </>
                )}
        </Grid>
    )
}

export default withLogging(Features)
