import {withLogging} from "gillog"

import Title from "components/about/title"
import Creators from "components/about/creators"
import Powerers from "components/about/powerers"

function About({log, mobile, strings: {about: strings}}) {

    // ====== RENDER ======>
    return (
        <>
            <Title strings={strings}/>
            <Creators strings={strings}/>
            <Powerers strings={strings}/>
        </>
    )
}

export default withLogging(About)
