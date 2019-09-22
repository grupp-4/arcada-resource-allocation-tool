import {withLogging} from "gillog"

import {useState} from "react"

import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
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
        log.debug("Setting landing page on desktop to", value)
    }
    function changeLandingPageMobile(event) {
        const value = event.target.value
        setState(prevState => ({...prevState, ...{landingPageMobile: value}}))
        window.localStorage.landingPageMobile = value
        log.debug("Setting landing page on mobile to", value)
    }

    // ====== RENDER ======>

    return (
        <Menu
            open={!!anchorEl}
            onClose={onClose}
            anchorEl={anchorEl}
            keepMounted
            id={"preferences-menu"}>
            <MenuItem className={styles.preferencesMenuItem} button={false}>
                <FormControl component={"fieldset"} id={"theme"}>
                    <FormLabel classes={{focused: styles.preferencesMenuLegend}} component={"legend"}>{strings.theme.label}</FormLabel>
                    <RadioGroup onChange={changeTheme} column={mobile} row={!mobile} value={theme} aria-label={"theme"}>
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
            <MenuItem className={styles.preferencesMenuItem} button={false}>
                <FormControl component={"fieldset"} id={"landing-page"}>
                    <FormLabel classes={{focused: styles.preferencesMenuLegend}} component={"legend"}>{strings.landingPage.label}</FormLabel>
                    <FormHelperText id={"landing-page-desktop"}>{strings.landingPage.desktop}</FormHelperText>
                    <RadioGroup onChange={changeLandingPage} column={mobile} row={!mobile} value={landingPage} aria-label={"landing-page-desktop"}>
                        <FormControlLabel
                            value={"courses"}
                            control={<Radio/>}
                            label={strings.landingPage.courses}/>
                        <FormControlLabel
                            value={"teachers"}
                            control={<Radio/>}
                            label={strings.landingPage.teachers}/>
                    </RadioGroup>
                    <FormHelperText id={"landing-page-mobile"}>{strings.landingPage.mobile}</FormHelperText>
                    <RadioGroup onChange={changeLandingPageMobile} column={mobile} row={!mobile} value={landingPageMobile}
                                aria-label={"landing-page-mobile"}>
                        <FormControlLabel
                            value={"courses"}
                            control={<Radio/>}
                            label={strings.landingPage.courses}/>
                        <FormControlLabel
                            value={"teachers"}
                            control={<Radio/>}
                            label={strings.landingPage.teachers}/>
                        <FormControlLabel
                            value={"events-feed"}
                            control={<Radio/>}
                            label={strings.landingPage.eventsFeed}/>
                    </RadioGroup>
                </FormControl>
            </MenuItem>
        </Menu>
    )
}

export default withLogging(Preferences)
