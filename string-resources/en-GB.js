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
        featuresHeading: "Features",
        expand: "Expand",
        collapse: "Collapse",
        features: [
            [
                {
                    heading: "Events",
                    description: "Notifies you about changes in resource allocations"
                },
                {
                    heading: "Two perspectives",
                    description: "Two tailored views, so that you can use the tool from your preferred perspective."
                },
                {
                    heading: "Editing",
                    description: "Enjoy an intuitive editing experience thanks to suggestions, autocomplete and helpful color coding."
                }
            ],
            [
                {
                    heading: "Responsive",
                    description: "Tailored for mobile and desktop platforms with dedicated consideration for both touch screen and keyboard + mouse."
                },
                {
                    heading: "Light/dark mode",
                    description: "Supports light and dark UI theme, a much requested feature recently added in Windows, macOS, iOS and Android."
                },
                {
                    heading: "Languages",
                    description: "Comes in multiple languages: English, Swedish, Finnish, Chinese."
                },
                {
                    heading: "Accessibility",
                    description: "Highly accessible thanks to semantic HTML, ARIA and support for keyboard navigation."
                }
            ],
            [
                {
                    heading: "Works offline",
                    description: "The app elegantly handles interrupted network connectivity."
                },
                {
                    heading: "Statically deployable",
                    description: "Deployable as a static website. No need for a custom backend configuration."
                },
                {
                    heading: "Blazing fast",
                    description: "Optimized bundles, link preloading and \"lazy loading\" result in quick page load times and instantaneous feedback on user interaction."
                }
            ]
        ],
        createdBy: "Created by",
        creatorLinkTitle(name) {
            return `${name}'s GitHub page`
        },
        goToGitHub: "Checkout repository at GitHub",
        poweredBy: "Powered by",
        reportABug: "Report a bug",
        suggestAFeature: "Suggest a feature",
        getSupport: "Get support",
        giveFeedback: "Give feedback",
        license1: "This project is licensed under the terms of the ",
        license2: "MIT License",
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
    eventsFeedDisclaimer: "There would be events to display, but unfortunately displaying events isn't implemented yet.",
    noEvents: "There are no events to display.",
    _global: global
}

// ====== FOOTER ======>
const footer = {
    lastUpdated: "Last updated:",
    date(time) {
        return new Date(time).toLocaleTimeString("en-GB", {timeStyle: "short"})
    },
    calculating: "calculating...",
    undo: "undo",
    submitted: "Submitted changes",
    discarded: "Discarded changes",
    synced: "Sync complete"
}

export default {code, global, header, main, footer}
