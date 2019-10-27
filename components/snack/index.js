import {withLogging} from "gillog"
import Snackbar from "@material-ui/core/Snackbar"

function Snack({log, message, setOpen, open}) {


    // ====== RENDER ======>
    return (
        <Snackbar
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            open={open}
            onExited={() => setOpen(false)}
            autoHideDuration={1500}
            onClose={() => setOpen(false)}
            ContentProps={{
                "aria-describedby": "message-id"
            }}
            message={<span id={"message-id"}>{message}</span>}
        />
    )
}

export default withLogging(Snack)
