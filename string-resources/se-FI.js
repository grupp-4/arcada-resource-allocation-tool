import {cap} from "./utility"

// ====== LANG ======>
const code = "se"

// ====== GLOBALS ======>
const global = {
    appName: "Resursallokering",
    events: "händelser",
    courses: "kurser",
    teachers: "lärare"
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
            label: "Utseende",
            auto: "Auto",
            light: "Ljust",
            dark: "Mörkt"
        },
        landingPage: {
            label: "Landningssida",
            desktop: "Desktop",
            mobile: "Mobil",
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
        about: "Om oss",
        reset: "återställ"
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
    lastUpdated: "Senast uppdaterad:",
    minutesAgo: "minuter sedan",
    rightNow: "just nu"
}

export default {code, global, header, main, footer}
