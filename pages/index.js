import {withLogging} from "gillog"

import {useRouter} from "next/router"

import Courses from "components/courses"
import Teachers from "components/teachers"
import EventsFeed from "components/events-feed"

function Index({log, landingPage, landingPageMobile, cs, wc, mobile, strings}) {

    // ====== HOOKS ======>
    const router = useRouter()

    // ====== CONDITIONAL RENDER ======>
    const page = router.query.page
    if (page) {
        switch (page) {
            case "courses":
                log.info("Loading page", page)
                return <Courses wc={wc} mobile={mobile} strings={strings} loglevel={log.getLevel()}/>
            case "teachers":
                log.info("Loading page", page)
                return <Teachers wc={wc} mobile={mobile} strings={strings} loglevel={log.getLevel()}/>
            case "events-feed":
                if (mobile) {
                    log.info("Loading page", page)
                    return <EventsFeed cs={cs} mobile={mobile} strings={strings} loglevel={log.getLevel()}/>
                }
                break
            default:
        }
    }
    if (mobile) {
        switch (landingPageMobile) {
            case "courses":
                log.info("Landing on page \"courses\" based on preference for landing page on mobile")
                return <Courses wc={wc} mobile={mobile} strings={strings} loglevel={log.getLevel()}/>
            case "teachers":
                log.info("Landing on page \"teachers\" based on preference for landing page on mobile")
                return <Teachers wc={wc} mobile={mobile} strings={strings} loglevel={log.getLevel()}/>
            default:
                log.info("Landing on default landing page on mobile: events-feed")
                return <EventsFeed cs={cs} mobile={mobile} strings={strings} loglevel={log.getLevel()}/>
        }
    } else {
        if (landingPage === "teachers") {
            log.info("Landing on page \"teachers\" based on preference for landing page")
            return <Teachers wc={wc} mobile={mobile} strings={strings} loglevel={log.getLevel()}/>
        } else {
            log.info("Landing on default landing page: courses")
            return <Courses wc={wc} mobile={mobile} strings={strings} loglevel={log.getLevel()}/>
        }
    }
}

export default withLogging(Index)
