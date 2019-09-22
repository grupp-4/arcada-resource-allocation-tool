import {cap} from "./utility"

// ====== GLOBALS ======>
const global = {
    appName: "Resursallokering",
    events: "händelser",
    courses: "kurser",
    teachers: "lärare"
}

// ====== HEADER ======>
const header = {
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
        }
    }
}

// ====== MAIN ======>
const main = {
    get eventsFeedTabName() {return cap(this._global.events)},
    get coursesTabName() {return cap(this._global.courses)},
    get teachersTabName() {return cap(this._global.teachers)},
    _global: global
}

export default {global, header, main}
