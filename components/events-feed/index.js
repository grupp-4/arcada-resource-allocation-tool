import {withLogging} from "gillog"

import Card from "./card"

function EventsFeed({log}) {
    return(
        <>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </>
    )
}

export default withLogging(EventsFeed)
