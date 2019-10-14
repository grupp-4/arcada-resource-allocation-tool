import {withLogging} from "gillog"

import Grid from "@material-ui/core/Grid"

import Title from "components/about/title"

function About({log, mobile, strings}) {

    // ====== RENDER ======>
    return (
        <>
            <Title/>
            {"This is the About page."}
        </>
    )
}

export default withLogging(About)
