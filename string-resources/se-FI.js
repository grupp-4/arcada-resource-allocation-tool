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
    course: {
        heldBy: "Hålls av",
        period1: "Period 1",
        period2: "Period 2",
        period3: "Period 3",
        period4: "Period 4",
        totalHours: "Totala timmar:",
        notAssigned: "Inte tilldelad",
        assignTeacher: "Tilldela en lärare till denna kurs"
    },
    teacher: {
        course: "Kurs",
        period1: "Period 1",
        period2: "Period 2",
        period3: "Period 3",
        period4: "Period 4",
        totalHours: "Totala timmar:",
        assignCourse: "Tilldela en kurs till denna lärare"
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
    eventsFeedDisclaimer: "Det skulle finnas händelser att visa, men tyvärr har visning av händelser inte implementerats ännu.",
    noEvents: "Det finns inga händelser att visa.",
    _global: global
}

// ====== FOOTER ======>
const footer = {
    lastUpdated: "Senast uppdaterad:",
    date(time) {
        return new Date(time).toLocaleDateString("se-FI", {dateStyle: "medium", timeStyle: "short"})
    },
    calculating: "beräknar...",
    undo: "ångra",
    submitted: "Skickade ändringar",
    discarded: "Raderade ändringar",
    synced: "Synkning färdig"
}

export default {code, global, header, main, footer}
