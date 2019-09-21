import {cap} from "./utility"

// ====== GLOBALS ======>
const global = {
    appName: "Resurssien kohdentaminen",
    events: "tapahtumat",
    courses: "kurssit",
    teachers: "opettajat"
}

// ====== HEADER ======>
const header = {
    preferencesMenu: {
        theme: {
            label: "Tila",
            auto: "Auto",
            light: "Kirkas",
            dark: "Pimeä"
        },
        landingPage: {
            label: "Aloitussivu",
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
