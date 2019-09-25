import {withLogging} from "gillog"

import {useState} from "react"

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
    const [{theme, landingPage, landingPageMobile}, setState] = useState(preferences)

    // ====== EVENT HANDLERS ======>

    function changeTheme(event) {
        const value = event.target.value
        setState(prevState => ({...prevState, ...{theme: value}}))
        if (value !== "auto") {
            window.localStorage.theme = value
            setTheme()
        } else {
            window.localStorage.removeItem("theme")
            setTheme()
        }
        log.debug("Setting theme to", value)
    }
    function changeLandingPage(event) {
        const value = event.target.value
        setState(prevState => ({...prevState, ...{landingPage: value}}))
        window.localStorage.landingPage = value
        log.debug("Setting landing page to", value)
    }
    function changeLandingPageMobile(event) {
        const value = event.target.value
        setState(prevState => ({...prevState, ...{landingPageMobile: value}}))
        window.localStorage.landingPageMobile = value
        log.debug("Setting landing page on mobile to", value)
    }
    function resetTheme() {
        const value = "auto"
        setState(prevState => ({...prevState, ...{theme: value}}))
        window.localStorage.removeItem("theme")
        setTheme()
        log.debug("Resetting theme to", value)
    }
    function resetLandingPages() {
        const values = {landingPage: null, landingPageMobile: null}
        setState(prevState => ({...prevState, ...values}))
        window.localStorage.removeItem("landingPage")
        window.localStorage.removeItem("landingPageMobile")
        log.debug("Resetting landing page to courses")
        log.debug("Resetting landing page on mobile to events-feed")
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
                        <span>{strings.theme.label}</span>
                        {theme !== "auto"
                            ? (
                                <Link component={"button"} onClick={resetTheme} variant={"caption"}>
                                    {strings.reset}
                                </Link>
                            ) : ""}
                    </FormLabel>
                    <RadioGroup
                        onChange={changeTheme}
                        column={mobile}
                        row={!mobile}
                        value={theme}
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
                        <span>{strings.landingPage.label}</span>
                        {landingPage || landingPageMobile
                            ? (
                                <Link component={"button"} onClick={resetLandingPages} variant={"caption"}>
                                    {strings.reset}
                                </Link>
                            ) : ""}
                    </FormLabel>
                    <FormHelperText className={styles.menuHelperText} id={"landing-page-desktop"}>
                        {strings.landingPage.desktop}
                    </FormHelperText>
                    <RadioGroup
                        onChange={changeLandingPage}
                        column={mobile}
                        row={!mobile}
                        value={landingPage ? landingPage : "courses"}
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
                        column={mobile}
                        row={!mobile}
                        value={landingPageMobile ? landingPageMobile : "events-feed"}
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
            <MenuItem>About</MenuItem>
        </Menu>
    )
}

export default withLogging(Preferences)
