import {withLogging} from "gillog"

import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

function Languages({log, anchorEl, onClose}) {
    // ====== INITIAL LOGIC ======>
    const languages = [
        {
            key: "english",
            label: "English"
        },
        {
            key: "swedish",
            label: "Swedish"
        },
        {
            key: "finnish",
            label: "Suomi"
        },
        {
            key: "chinese",
            label: "中文"
        }
    ]
    // ====== EVENT HANDLERS ======>
    function changeLanguage(language) {
        log.debug(`User tried changing language to "${language}", but the feature isn't yet implemented.`)
        onClose()
    }
    // ====== RENDER ======>
    return (
        <Menu
            open={!!anchorEl}
            onClose={onClose}
            anchorEl={anchorEl}
            keepMounted
            id={"languages-menu"}>
            {languages.map(({key, label}) => (
                <MenuItem
                    onClick={() => changeLanguage(key)}
                    selected={key === "swedish"}>
                    {label}
                </MenuItem>
            ))}
        </Menu>
    )
}

export default withLogging(Languages)
