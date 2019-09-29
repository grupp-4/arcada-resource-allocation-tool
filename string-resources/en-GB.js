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
    get eventsFeedTabName() {
        return cap(this._global.events)
    },
    get coursesTabName() {
        return cap(this._global.courses)
    },
    get teachersTabName() {
        return cap(this._global.teachers)
    },
    _global: global
}

// ====== FOOTER ======>
const footer = {
    lastUpdated: "Last updated:",
    minutesAgo: "minutes ago",
    rightNow: "right now"
}

export default {code, global, header, main, footer}
