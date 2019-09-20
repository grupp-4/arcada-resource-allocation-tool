
let theme = "light";

function activateLightMode() {
    theme = "light"
}

function activateDarkMode() {
    theme = "dark"
}

function setColorScheme() {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches
    const isNotSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches
    const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;
    console.log("Inside setcolorscheme, isDarkMode");
    console.log(isDarkMode);

    window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && activateDarkMode())
    window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && activateLightMode())


    if (isDarkMode) activateDarkMode()
    if (isLightMode) activateLightMode()
    if (isNotSpecified || hasNoSupport) {
        console.log('You specified no preference for a color scheme or your browser does not support it. I Schedule dark mode during night time.')
        now = new Date();
        hour = now.getHours();
        if (hour < 4 || hour >= 13) {
            activateDarkMode();
        }
    }
}


export default function checkTheme() {
    setColorScheme();
    return theme
}