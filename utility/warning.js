export default function warning(type, value) {
    let hour
    switch (type) {
        case "period":
            hour = parseInt(value)
            return hour > 200 || hour < 50
        case "totalHours":
            hour = parseInt(value)
            return hour > 1600 || hour < 800
        case "periodTotal":
            hour = parseInt(value)
            return hour > 500 || hour < 200
        case "coursePeriodTotal":
            hour = parseInt(value)
            return hour > 400 || hour < 100
        case "courseTotalHours":
            hour = parseInt(value)
            return hour > 800 || hour < 100
        case "teacherCourses":
            return value.length <= 0
        default:
            return false
    }
}
