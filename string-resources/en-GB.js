import {cap} from "./utility"

// ====== GLOBALS ======>
const global = {
    appName: "Resource Allocation",
    events: "events",
    courses: "courses",
    teachers: "teachers"
}

// ====== HEADER ======>
const header = {
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
        reset: "reset"
    }
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

export default {global, header, main}
