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
    course: {
        heldBy: "Opettaja",
        period1: "1. jakso",
        period2: "2. jakso",
        period3: "3. jakso",
        period4: "4. jakso",
        notAssigned: "Ei määritetty",
        assignTeacher: "Valitse opettaja tälle kursille"
    },
    teacher: {
        course: "Kurssi",
        period1: "1. jakso",
        period2: "2. jakso",
        period3: "3. jakso",
        period4: "4. jakso",
        totalHours: "Tunnit yhteensä:",
        assignCourse: "Valitse kurssi tälle opettajalle"
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
    _global: global
}

// ====== FOOTER ======>
const footer = {
    lastUpdated: "Viimeksi päivitetty:",
    minutesAgo: "minuuttia sitten",
    rightNow: "juuri nyt",
    undo: "peru",
    submitted: "Muutokset lähetetty",
    discarded: "Muutokset poistettu",
    synced: "Synkronisointi valmis"
}

export default {code, global, header, main, footer}
