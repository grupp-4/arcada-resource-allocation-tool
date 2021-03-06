import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import useTypographyStyles from "styles/typography"

function Error({code}) {

    // ====== INITIAL LOGIC ======>
    const message = {
        400: "Bad Request",
        404: "This page could not be found",
        405: "Method Not Allowed",
        500: "Internal Server Error"
    }

    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()

    // ====== RENDER ======>
    return (
        <Grid className={typographyStyles.typography} component={Typography} item variant={"body1"} xs={12}>
            {code && message[code]
            ? `${code} | ${message[code]}`
            : code
            ? `Error: ${code}`
            : `An unexpected error has occurred`}
        </Grid>
    )
}

Error.getInitialProps = async ({res, err}) => {
    const code = res ? res.statusCode : err ? err.statusCode : null
    return {code}
}

export default Error
