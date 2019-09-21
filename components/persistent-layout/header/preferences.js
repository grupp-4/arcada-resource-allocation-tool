import {withLogging} from "gillog"

import {useState} from "react"

import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"

import useStyles from "./styles"

function Preferences({log, anchorEl, onClose, strings}) {

    // ====== HOOKS ======>

    const styles = useStyles()
    const [{theme, landingPage}, setState] = useState({theme: "auto", landingPage: null})

    // ====== EVENT HANDLERS ======>

    function changeTheme(event) {
        setState(prevState => ({...prevState, ...{theme: event.target.value}}))
    }
    function changeLandingPage(event) {
        setState(prevState => ({...prevState, ...{landingPage: event.target.value}}))
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
                    <RadioGroup onChange={changeTheme} row value={theme} aria-label={"theme"}>
                        <FormControlLabel
                            value={"auto"}
                            control={<Radio/>}
                            label={strings.theme.auto}
                            labelPlacement={"bottom"}/>
                        <FormControlLabel
                            value={"light"}
                            control={<Radio/>}
                            label={strings.theme.light}
                            labelPlacement={"bottom"}/>
                        <FormControlLabel
                            value={"dark"}
                            control={<Radio/>}
                            label={strings.theme.dark}
                            labelPlacement={"bottom"}/>
                    </RadioGroup>
                </FormControl>
            </MenuItem>
            <MenuItem className={styles.preferencesMenuItem} button={false}>
                <FormControl component={"fieldset"} id={"theme"}>
                    <FormLabel classes={{focused: styles.preferencesMenuLegend}} component={"legend"}>{strings.landingPage.label}</FormLabel>
                    <RadioGroup onChange={changeLandingPage} row value={landingPage} aria-label={"landing-page"}>
                        <FormControlLabel
                            value={"courses"}
                            control={<Radio/>}
                            label={strings.landingPage.courses}
                            labelPlacement={"bottom"}/>
                        <FormControlLabel
                            value={"teachers"}
                            control={<Radio/>}
                            label={strings.landingPage.teachers}
                            labelPlacement={"bottom"}/>
                    </RadioGroup>
                </FormControl>
            </MenuItem>
        </Menu>
    )
}

export default withLogging(Preferences)
