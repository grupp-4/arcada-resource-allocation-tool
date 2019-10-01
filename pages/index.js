import {isomorphic} from "gillog"
import {useRouter} from "next/router"

import Courses from "components/courses"
import Teachers from "components/teachers"
import EventsFeed from "components/events-feed"

const log = isomorphic.getLogger("Index")

function Index({landingPage, landingPageMobile, data, mobile, strings}) {

    // ====== HOOKS ======>
    const router = useRouter()

    // ====== CONDITIONAL RENDER ======>
    const page = router.query.page
    if (page) {
        switch (page) {
            case "courses":
                log.debug("Loading page", page)
                return <Courses data={data} strings={strings}/>
            case "teachers":
                log.debug("Loading page", page)
                return <Teachers data={data} strings={strings}/>
            case "events-feed":
                log.debug("Loading page", page)
                return <EventsFeed data={data} strings={strings}/>
            default:
        }
    }
    if (mobile) {
        switch (landingPageMobile) {
            case "courses":
                log.debug("Landing on page \"courses\" based on preference for landing page on mobile")
                return <Courses data={data} strings={strings}/>
            case "teachers":
                log.debug("Landing on page \"teachers\" based on preference for landing page on mobile")
                return <Teachers data={data} strings={strings}/>
            default:
                log.debug("Landing on default landing page on mobile: events-feed")
                return <EventsFeed data={data} strings={strings}/>
        }
    } else {
        if (landingPage === "teachers") {
            log.debug("Landing on page \"teachers\" based on preference for landing page")
            return <Teachers data={data} strings={strings}/>
        } else {
            log.debug("Landing on default landing page: courses")
            return <Courses data={data} strings={strings}/>
        }
    }
}

export default Index
