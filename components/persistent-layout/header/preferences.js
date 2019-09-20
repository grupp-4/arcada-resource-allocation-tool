import {withLogging} from "gillog"

import {useState} from "react"

import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Radio from "@material-ui/core/Radio"

function Preferences({log, anchorEl, onClose}) {
    // ====== HOOKS ======>
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
            anchorEl={anchorEl}
            open={!!anchorEl}
            onClose={onClose}>
            <MenuItem>
                <FormControl>
                    <FormLabel>Utseende</FormLabel>
                    <RadioGroup onChange={changeTheme}
                                row value={theme}>
                        <FormControlLabel
                            value="auto"
                            control={<Radio/>}
                            label="Auto"
                            labelPlacement="bottom"/>
                        <FormControlLabel
                            value="light"
                            control={<Radio/>}
                            label="Ljust"
                            labelPlacement="bottom"/>
                        <FormControlLabel
                            value="dark"
                            control={<Radio/>}
                            label="Mörkt"
                            labelPlacement="bottom"/>
                    </RadioGroup>
                </FormControl>
            </MenuItem>
            <MenuItem>
                <FormControl>
                    <FormLabel>Landningssida</FormLabel>
                    <RadioGroup onChange={changeLandingPage}
                                row value={landingPage}>
                        <FormControlLabel
                            value="courses"
                            control={<Radio/>}
                            label="Kurser"
                            labelPlacement="bottom"/>
                        <FormControlLabel
                            value="teachers"
                            control={<Radio/>}
                            label="Lärare"
                            labelPlacement="bottom"/>
                    </RadioGroup>
                </FormControl>
            </MenuItem>
        </Menu>
    )
}

export default withLogging(Preferences)
