// type is for the function to know "what" it's handling, 
// position is for something like position in an array or object property
// value is an object/array/integer


export default function warning(type, position, value) {

    if (type == "period") {
        let hour = parseInt(value.hours[position], 10);
        if (hour >= 200 || hour <= 50) return true
        else return false
    }
    else if (type == "totalHours") {
        if (value >= 1600 || value <= 800) return true
        else return false
    }
    else if (type == "periodTotal") {
        if (value[position] >= 500 || value[position] <= 200) return true
        else return false
    }
    else if (type == "teacherCourses") {
        if (value.length <= 0) return true
        else return false
    }
    else {
        return false
    }
}