import {withLogging} from "gillog"

import Courses from "components/courses"
import Teachers from "components/teachers"
import EventsFeed from "components/events-feed"

function Index({log, mobile, landingPage, landingPageMobile, data}) {
    if (mobile) {
        const message = "Landing on client's preference for mobile landing page:"
        switch (landingPageMobile) {
            case "courses":
                log.debug(message, landingPageMobile)
                return <Courses data={data}/>
            case "teachers":
                log.debug(message, landingPageMobile)
                return <Teachers data={data}/>
            case "events-feed":
                log.debug(message, landingPageMobile)
                return <EventsFeed data={data}/>
        }
        log.debug("Client has no preference for landing page. Landing on default landing page on mobile: events-feed")
        return <EventsFeed data={data}/>
    } else {
        const message = "Landing on client's preference for desktop landing page:"
        switch (landingPage) {
            case "courses":
                log.debug(message, landingPage)
                return <Courses data={data}/>
            case "teachers":
                log.debug(message, landingPage)
                return <Teachers data={data}/>
        }
        log.debug("Client has no preference for landing page. Landing on default landing page: courses")
        return <Courses data={data}/>
    }
}

export default withLogging(Index)
