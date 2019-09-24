export default {

    coursesTeachersFraction: 8, // The width (4/12) of courses-teachers tab view when displayed next to events feed
    darkNavbarInDarkMode: true, // Whether the navbar should shift to a darker nuance of blue when dark mode is enabled
    eventsFeedFraction: 4, // The width (4/12) of events feed when displayed next to courses-teachers tab view
    mainMaxHeight: 896, // Max height of Main component
    maxWidth: "lg", // Max width of site content (see https://material-ui.com/customization/breakpoints)
    mobileBreakPoint: "sm", // Beginning with screen sizes in this range, or smaller, the mobile layout kicks in (see https://material-ui.com/customization/breakpoints)
    darkMode: false, // light/dark mode (see https://material-ui.com/customization/palette/#type-light-dark-theme)
    spacing: 2, // Global spacing factor. Used as `theme.spacing(globalSpacingFactorComesHere)` (see https://material-ui.com/customization/spacing)
    tabBarElevation: 0, // The elevation (material design terminology for how much drop shadow) of the Tabs components

    // Following parameters depend on whether dark mode is enabled or not
    get mainPapersElevation() { return this.darkMode ? 0 : 1 }, // The elevation (material design terminology for how much drop shadow) of the Paper components in the Main component
    get tabBarDarkness() { return this.darkMode ? 0 : 0 }, // How much darker (in ratio, than the default background color) tab bar backgrounds should be
    get tabPanelDarkness() { return this.darkMode ? 0.25 : 0 } // How much darker (in ratio, than the default background color) tab panel backgrounds should be
}
