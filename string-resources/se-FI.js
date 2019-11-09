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
    about: {
        featuresHeading: "Egenskaper",
        expand: "Visa",
        collapse: "Göm",
        features: [
            [
                {
                    heading: "Händelser",
                    description: "Meddelar dig då det sker ändringar i resursallokeringar."
                },
                {
                    heading: "Två perspektiv",
                    description: "Två skräddarsydda vyer, så att du kan använda verktyget från det perspektiv som du upplever som mest praktiskt i stunden."
                },
                {
                    heading: "Editering",
                    description: "Njut av en intuitiv editeringsupplevelse, med förslag, autokomplettering och hjälpsam färgkodning."
                }
            ],
            [
                {
                    heading: "Responsiv",
                    description: "Skräddarsydd för mobil- samt skrivbordsplattformer med tillägnad hänsyn till både pekskärmar och tangentbord + mus."
                },
                {
                    heading: "Ljust/mörkt tema",
                    description: "Stöd för ljust och mörkt tema, en mycket efterfrågad funktion, nyligen tillagd i Windows, macOS, iOS och Android."
                },
                {
                    heading: "Språk",
                    description: "Finns i flera språk: engelska, svenska, finska och kinesiska."
                },
                {
                    heading: "Tillgänglighet",
                    description: "Mycket tillgänglig tack vare semantisk HTML, ARIA och stöd för navigering med tangentbordet."
                }
            ],
            [
                {
                    heading: "Fungerar offline",
                    description: "Appen tar elegant hand om avbrott i kommunikationen med nätverket."
                },
                {
                    heading: "Statisk webbsida",
                    description: "Kan laddas upp som en statisk webbsida. Inget behov av en anpassad backend-konfiguration."
                },
                {
                    heading: "Blixtsnabb",
                    description: "Optimerad paketering samt förladdning och \"lat laddning\" av länkar resulterar i att sidorna laddar snabbt och användaren får omedelbar feedback på interaktion."
                }
            ]
        ],
        createdBy: "Skapad av",
        creatorLinkTitle(name) {
            return `${name}s GitHub sida`
        },
        goToGitHub: "Kolla repositoriet på GitHub",
        poweredBy: "Bygger på",
        reportABug: "Rapportera en bugg",
        suggestAFeature: "Föreslå en funktion",
        getSupport: "Ställ en fråga",
        giveFeedback: "Ge feedback",
        license1: "Det här projektet är licensierat under ",
        license2: "MIT licensen",
        license3: "."
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
        return new Date(time).toLocaleTimeString("se-FI", {timeStyle: "short"})
    },
    calculating: "beräknar...",
    undo: "ångra",
    submitted: "Skickade ändringar",
    discarded: "Raderade ändringar",
    synced: "Synkning färdig"
}

export default {code, global, header, main, footer}
