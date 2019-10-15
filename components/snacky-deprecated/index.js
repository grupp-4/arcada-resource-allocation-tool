import {withLogging} from "gillog"

import {SnackbarProvider, useSnackbar} from "notistack"

function Snacky({log, message, onExited}) {

    // ====== RENDER ======>
    return (
        <SnackbarProvider
            onExited={onExited}
            maxSnack={3}
            autoHideDuration={1500}
            disableWindowBlurListener>
            {useSnackbar().enqueueSnackbar(message)}
        </SnackbarProvider>
    )
}

export default withLogging(Snacky)
