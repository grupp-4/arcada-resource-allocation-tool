import {cap} from "./utility"

// ====== LANG ======>
const code = "fi"

// ====== GLOBALS ======>
const global = {
    appName: "Resurssien kohdentaminen",
    events: "tapahtumat",
    courses: "kurssit",
    teachers: "opettajat"
}

// ====== HEADER ======>
const header = {
    get appName() {
        return this._global.appName
    },
    preferencesMenu: {
        theme: {
            label: "Tila",
            auto: "Auto",
            light: "Kirkas",
            dark: "Pimeä"
        },
        landingPage: {
            label: "Aloitussivu",
            desktop: "Pöytäkoneella",
            mobile: "Mobiililaitteella",
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
        about: "Meistä",
        reset: "palauta"
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
    lastUpdated: "Viimeksi päivitetty:",
    minutesAgo: "minuuttia sitten",
    rightNow: "juuri nyt",
    _global: global
}

export default {code, global, header, main}
