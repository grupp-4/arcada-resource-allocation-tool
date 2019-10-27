// type is for the function to know "what" it's handling, 
// position is for something like position in an array or object property
// value is an object/array/integer


export default function warning(type, position, value) {

    let hour

    switch (type) {
        case "period":
            hour = parseInt(value.hours[position], 10)
            if (hour > 200 || hour < 50) return true
            break

        case "totalHours":
            hour = parseInt(value, 10)
            if (hour > 1600 || hour < 800) return true
            break

        case "periodTotal":
            hour = parseInt(value, 10)
            if (hour > 500 || hour < 200) return true
            break

        case "coursePeriodTotal":
            hour = parseInt(value, 10)
            if (hour > 400 || hour < 100) return true
            break

        case "courseTotalHours":
            hour = parseInt(value, 10)
            if (hour > 800 || hour < 100) return true
            break

        case "teacherCourses":
            if (value.length <= 0) return true
            break

        default:
            return false
    }
}