import {withLogging} from "gillog"
import Snackbar from '@material-ui/core/Snackbar';

function Snack({log, message, setOpen, open}) {

    // ====== HOOKS ======>

    const handleClose = () => {
        setOpen(false);
    };

    // ====== RENDER ======>
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            onExited={handleClose}
            autoHideDuration={1500}
            onClose={handleClose}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{message}</span>}
        />
    )
}

export default withLogging(Snack)
