export default function getLandingPagePreferences() {
    if (typeof (window) !== "undefined") {
        const landingPage = window.localStorage.landingPage
        const landingPageMobile = window.localStorage.landingPageMobile
        return {landingPage, landingPageMobile}
    }
    return {landingPage: null, landingPageMobile: null}
}
