import { SnackbarProvider, useSnackbar } from 'notistack';

export default function Snacky({ message, resetState }) {
    const Snack = () => {
        const { enqueueSnackbar } = useSnackbar();
        const handleClick = () => {
            enqueueSnackbar(message);
        };
        return (
            <React.Fragment>
                {handleClick()}
            </React.Fragment>
        );
    }

    return (
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={1500}
            disableWindowBlurListener={true}
            onExited={() => resetState()}
        >
            <Snack />
        </SnackbarProvider>
    )
}