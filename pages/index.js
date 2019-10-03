import {withLogging} from "gillog"

import {useRouter} from "next/router"

import Courses from "components/courses"
import Teachers from "components/teachers"
import EventsFeed from "components/events-feed"

function Index({log, landingPage, landingPageMobile, db, mobile, strings}) {

    // ====== HOOKS ======>
    const router = useRouter()

    // ====== CONDITIONAL RENDER ======>
    const page = router.query.page
    if (page) {
        switch (page) {
            case "courses":
                log.info("Loading page", page)
                return <Courses db={db} strings={strings}/>
            case "teachers":
                log.info("Loading page", page)
                return <Teachers db={db} strings={strings}/>
            case "events-feed":
                if (mobile) {
                    log.info("Loading page", page)
                    return <EventsFeed db={db} strings={strings}/>
                }
                break
            default:
        }
    }
    if (mobile) {
        switch (landingPageMobile) {
            case "courses":
                log.info("Landing on page \"courses\" based on preference for landing page on mobile")
                return <Courses db={db} strings={strings}/>
            case "teachers":
                log.info("Landing on page \"teachers\" based on preference for landing page on mobile")
                return <Teachers db={db} strings={strings}/>
            default:
                log.info("Landing on default landing page on mobile: events-feed")
                return <EventsFeed db={db} strings={strings}/>
        }
    } else {
        if (landingPage === "teachers") {
            log.info("Landing on page \"teachers\" based on preference for landing page")
            return <Teachers db={db} strings={strings}/>
        } else {
            log.info("Landing on default landing page: courses")
            return <Courses db={db} strings={strings}/>
        }
    }
}

export default withLogging(Index)
