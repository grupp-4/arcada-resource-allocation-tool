import {cap} from "./utility"

// ====== LANG ======>
const code = "en"

// ====== GLOBALS ======>
const global = {
    appName: "Resource Allocation",
    events: "events",
    courses: "courses",
    teachers: "teachers"
}

// ====== HEADER ======>
const header = {
    get appName() {
        return this._global.appName
    },
    navigationMenu: {
        get eventsFeed() {
            return cap(this._global.events)
        },
        get courses() {
            return cap(this._global.courses)
        },
        get teachers() {
            return cap(this._global.teachers)
        },
        _global: global
    },
    preferencesMenu: {
        theme: {
            label: "Theme",
            auto: "Auto",
            light: "Light",
            dark: "Dark"
        },
        landingPage: {
            label: "Landing Page",
            desktop: "Desktop",
            mobile: "Mobile",
            get eventsFeed() {
                return cap(this._global.events)
            },
            get courses() {
                return cap(this._global.courses)
            },
            get teachers() {
                return cap(this._global.teachers)
            },
            _global: global
        },
        about: "About",
        reset: "reset"
    },
    _global: global
}

// ====== MAIN ======>
const main = {
    course: {
        heldBy: "Held by",
        period1: "Period 1",
        period2: "Period 2",
        period3: "Period 3",
        period4: "Period 4",
        totalHours: "Total hours:",
        notAssigned: "Not assigned",
        assignTeacher: "Assign a teacher to this course"
    },
    teacher: {
        course: "Course",
        period1: "Period 1",
        period2: "Period 2",
        period3: "Period 3",
        period4: "Period 4",
        totalHours: "Total hours:",
        assignCourse: "Assign a course to this teacher"
    },
    about: {
        appTitle: "Resource Allocation Tool",
        createdBy: "Created by",
        creatorLinkTitle(name) {
            return `${name}'s GitHub page`
        }
    },
    get eventsFeedTabName() {
        return cap(this._global.events)
    },
    get coursesTabName() {
        return cap(this._global.courses)
    },
    get teachersTabName() {
        return cap(this._global.teachers)
    },
    eventsFeedDisclaimer: "There would be events to display, but unfortunately displaying events isn't implemented yet.",
    noEvents: "There are no events to display.",
    _global: global
}

// ====== FOOTER ======>
const footer = {
    lastUpdated: "Last updated:",
    date(time) {
        return new Date(time).toLocaleDateString("en-GB", {dateStyle: "medium", timeStyle: "short"})
    },
    calculating: "calculating...",
    undo: "undo",
    submitted: "Submitted changes",
    discarded: "Discarded changes",
    synced: "Sync complete"
}

export default {code, global, header, main, footer}
