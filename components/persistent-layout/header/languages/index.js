import {withLogging} from "gillog"

import {useRouter} from "next/router"

import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

function Languages({log, anchorEl, onClose, setStrings}) {
    // ====== HOOKS ======>
    const router = useRouter()
    // ====== INITIAL LOGIC ======>
    const languages = [
        {
            key: "en",
            label: "English"
        },
        {
            key: "se",
            label: "Swedish"
        },
        {
            key: "fi",
            label: "Suomi"
        },
        {
            key: "zh",
            label: "中文"
        }
    ]
    let initialSelectedLang = "en"
    if (typeof(window) !== "undefined" && window._lang) {
        initialSelectedLang = window._lang
    }
    // ====== EVENT HANDLERS ======>
    function changeLang(lang) {
        window.localStorage.lang = lang
        log.debug(`Setting language to "${lang}"`)
        setStrings()
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
                    key={key}
                    onClick={() => changeLang(key)}
                    selected={key === initialSelectedLang}>
                    {label}
                </MenuItem>
            ))}
        </Menu>
    )
}

export default withLogging(Languages)
