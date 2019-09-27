import {mergeResources} from "./utility"

import se from "./se-FI"
import en from "./en-GB"
import fi from "./fi-FI"
import zh from "./zh-CN"

function selectResources(langCode) {
    switch (langCode) {
        case "en":
            return en
        case "se":
            return se
        case "fi":
            return fi
        case "zh":
            return zh
        default:
            return null
    }
}

export default function useStringResources(log) {
    if (typeof (window) !== "undefined" && typeof (navigator) !== "undefined") {
        const local = window.localStorage.lang
        const session = window.sessionStorage.lang
        if (local) {
            window._lang = local
            log.debug(`Setting language to "${local}" based on item in localStorage`)
            return mergeResources(en, selectResources(local), "strings", log)
        } else if (session) {
            window._lang = session
            log.debug(`Setting language to "${session}" based on item in sessionStorage`)
            return mergeResources(en, selectResources(session), "strings", log)
        } else {
            let lang
            for (let langCode of navigator.languages) {
                lang = selectResources(langCode.slice(0, 2))
                if (lang) break
            }
            if (lang) {
                window.sessionStorage.lang = lang.code
                window._lang = lang.code
                log.debug(`Setting language to "${lang.code}" based on client's browser's language preference`)
                return mergeResources(en, lang, "strings", log)
            } else {
                log.debug(`Setting language to "${lang.code}" based on nothing`)
                window.sessionStorage.lang = "en"
                window._lang = "en"
                return en
            }
        }
    }
    log.debug(`Environment not client's. Setting language to "en"`)
    return en
}
