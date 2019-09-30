import {withLogging} from "gillog"

import Courses from "components/courses"
import Teachers from "components/teachers"
import EventsFeed from "components/events-feed"

function Index({log, mobile, landingPage, landingPageMobile, data}) {
    if (mobile) {
        switch (landingPageMobile) {
            case "courses":
                log.debug("Landing on page \"courses\" based on preference for landing page on mobile")
                return <Courses data={data}/>
            case "teachers":
                log.debug("Landing on page \"teachers\" based on preference for landing page on mobile")
                return <Teachers data={data}/>
            default:
                log.debug("Landing on default landing page on mobile: events-feed")
                return <EventsFeed data={data}/>
        }
    } else {
        if (landingPage === "teachers") {
            log.debug("Landing on page \"teachers\" based on preference for landing page")
            return <Teachers data={data}/>
        } else {
            log.debug("Landing on default landing page: courses")
            return <Courses data={data}/>
        }
    }
}

export default withLogging(Index)
