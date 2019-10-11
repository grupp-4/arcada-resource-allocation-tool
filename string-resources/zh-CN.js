import {cap} from "./utility"

// ====== LANG ======>
const code = "zh"

// ====== GLOBALS ======>
const global = {
    appName: "资源分配",
    events: "事件",
    courses: "课程",
    teachers: "教师"
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
        },
        about: "关于",
        reset: "重启"
    },
    _global: global
}

// ====== MAIN ======>
const main = {
    course: {
        heldBy: "老师",
        period1: "1期",
        period2: "2期",
        period3: "3期",
        period4: "4期",
        notAssigned: "未分配",
        assignTeacher: "指定老师参加这门课程"
    },
    teacher: {
        course: "课程",
        period1: "1期",
        period2: "2期",
        period3: "3期",
        period4: "4期",
        totalHours: "全部小时数：",
        assignCourse: "指派课程给这位老师"
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
    lastUpdated: "最近更新时间：",
    minutesAgo: "几分钟前",
    rightNow: "现在",
    undo: "撤消",
    submitted: "提交变更",
    discarded: "放弃的变更",
    synced: "同步完成"
}

export default {code, global, header, main, footer}
