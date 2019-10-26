import {withLogging} from "gillog"

import {useState} from "react"

import {useRouter} from "next/router"

import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import Link from "@material-ui/core/Link"
import FormHelperText from "@material-ui/core/FormHelperText"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"

import useStyles from "./styles"

function Preferences({log, anchorEl, onClose, preferences, setTheme, mobile, strings}) {

    // ====== HOOKS ======>
    const styles = useStyles()
    const [state, setState] = useState(preferences)
    const router = useRouter()

    // ====== EVENT HANDLERS ======>
    function changeTheme(event) {
        const value = event.target.value
        setState(prevState => ({...prevState, theme: value}))
        if (value !== "auto") window.localStorage.theme = value
        else window.localStorage.removeItem("theme")
        log.info("Setting theme to", value)
        setTheme()
    }
    function changeLandingPage(event) {
        const value = event.target.value
        if (value !== "courses") {
            setState(prevState => ({...prevState, landingPage: value}))
            window.localStorage.landingPage = value
        } else {
            setState(prevState => ({...prevState, landingPage: null}))
            window.localStorage.removeItem("landingPage")
        }
        log.info("Setting landing page to", value)
    }
    function changeLandingPageMobile(event) {
        const value = event.target.value
        if (value !== "events-feed") {
            setState(prevState => ({...prevState, landingPageMobile: value}))
            window.localStorage.landingPageMobile = value
        } else {
            setState(prevState => ({...prevState, landingPageMobile: null}))
            window.localStorage.removeItem("landingPageMobile")
        }
        log.info("Setting landing page on mobile to", value)
    }
    function resetTheme() {
        const value = "auto"
        setState(prevState => ({...prevState, theme: value}))
        window.localStorage.removeItem("theme")
        log.info("Resetting theme to", value)
        setTheme()
    }
    function resetLandingPages() {
        const values = {landingPage: null, landingPageMobile: null}
        setState(prevState => ({...prevState, ...values}))
        window.localStorage.removeItem("landingPage")
        window.localStorage.removeItem("landingPageMobile")
        log.info("Resetting landing page to courses")
        log.info("Resetting landing page on mobile to events-feed")
    }

    // ====== RENDER ======>
    return (
        <Menu
            open={!!anchorEl}
            onClose={onClose}
            anchorEl={anchorEl}
            keepMounted
            id={"preferences-menu"}>
                <MenuItem className={styles.menuItem} button={false}>
                    <FormControl className={styles.menuFieldset} component={"fieldset"} id={"theme"}>
                        <FormLabel
                            className={`${styles.menuLegend} ${mobile ? styles.menuLegendMobile : styles.menuLegendDesktop}`}
                            classes={{focused: styles.menuLegendFocused}}
                            component={"legend"}>
                                <span className={!mobile ? `${styles.menuLegendSpan} ${styles.menuLegendChild}` : styles.menuLegendChild}>{strings.theme.label}</span>
                                {state.theme !== "auto"
                                    ? (
                                        <Link className={styles.menuLegendChild} component={"button"} onClick={resetTheme} variant={"caption"}>
                                            {strings.reset}
                                        </Link>
                                    ) : null}
                        </FormLabel>
                        <RadioGroup
                            onChange={changeTheme}
                            row={!mobile}
                            value={state.theme}
                            aria-label={"theme"}>
                                <FormControlLabel
                                    value={"auto"}
                                    control={<Radio/>}
                                    label={strings.theme.auto}/>
                                <FormControlLabel
                                    value={"light"}
                                    control={<Radio/>}
                                    label={strings.theme.light}/>
                                <FormControlLabel
                                    value={"dark"}
                                    control={<Radio/>}
                                    label={strings.theme.dark}/>
                        </RadioGroup>
                    </FormControl>
                </MenuItem>
                <MenuItem className={styles.menuItem} button={false}>
                    <FormControl className={styles.menuFieldset} component={"fieldset"} id={"landing-page"}>
                        <FormLabel
                            className={`${styles.menuLegend} ${mobile ? styles.menuLegendMobile : styles.menuLegendDesktop}`}
                            classes={{focused: styles.menuLegendFocused}}
                            component={"legend"}>
                                <span className={!mobile ? styles.menuLegendSpan : null}>{strings.landingPage.label}</span>
                                {state.landingPage || state.landingPageMobile
                                    ? (
                                        <Link component={"button"} onClick={resetLandingPages} variant={"caption"}>
                                            {strings.reset}
                                        </Link>
                                    ) : null}
                        </FormLabel>
                        <FormHelperText className={styles.menuHelperText} id={"landing-page-desktop"}>
                            {strings.landingPage.desktop}
                        </FormHelperText>
                        <RadioGroup
                            onChange={changeLandingPage}
                            row={!mobile}
                            value={state.landingPage ? state.landingPage : "courses"}
                            aria-label={"landing-page-desktop"}>
                                <FormControlLabel
                                    value={"courses"}
                                    control={<Radio/>}
                                    label={strings.landingPage.courses}/>
                                <FormControlLabel
                                    value={"teachers"}
                                    control={<Radio/>}
                                    label={strings.landingPage.teachers}/>
                        </RadioGroup>
                        <FormHelperText className={styles.menuHelperText} id={"landing-page-mobile"}>
                            {strings.landingPage.mobile}
                        </FormHelperText>
                        <RadioGroup
                            onChange={changeLandingPageMobile}
                            row={!mobile}
                            value={state.landingPageMobile ? state.landingPageMobile : "events-feed"}
                            aria-label={"landing-page-mobile"}>
                                <FormControlLabel
                                    value={"events-feed"}
                                    control={<Radio/>}
                                    label={strings.landingPage.eventsFeed}/>
                                <FormControlLabel
                                    value={"courses"}
                                    control={<Radio/>}
                                    label={strings.landingPage.courses}/>
                                <FormControlLabel
                                    value={"teachers"}
                                    control={<Radio/>}
                                    label={strings.landingPage.teachers}/>
                        </RadioGroup>
                    </FormControl>
                </MenuItem>
        </Menu>
    )
}

export default withLogging(Preferences)
