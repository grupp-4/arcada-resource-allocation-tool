import {cap} from "./utility"

// ====== GLOBALS ======>
const global = {
    appName: "资源分配",
    events: "事件",
    courses: "课程",
    teachers: "教师"
}

// ====== HEADER ======>
const header = {
    preferencesMenu: {
        theme: {
            label: "状态",
            auto: "自动",
            light: "亮",
            dark: "暗"
        },
        landingPage: {
            label: "登陆页面",
            desktop: "在桌面上",
            mobile: "在移动设备上",
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
