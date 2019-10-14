import {withLogging} from "gillog"

import Title from "components/about/title"
import Creators from "components/about/creators"

function About({log, mobile, strings: {about: strings}}) {

    // ====== RENDER ======>
    return (
        <>
            <Title strings={strings}/>
            <Creators mobile={mobile} strings={strings}/>
        </>
    )
}

export default withLogging(About)
