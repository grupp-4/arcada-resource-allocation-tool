import {withLogging} from "gillog"

function Navigation({open, closeDrawer}) {

    // ====== RENDER ======>
    return (
        <div onClick={closeDrawer}>
            {open ? "Menu is open" : "Menu is closed"}
        </div>
    )
}

export default withLogging(Navigation)
