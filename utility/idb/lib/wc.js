import {clientSide} from "gillog"

import {teachersCoursesPopulate} from "./static"

const log = clientSide.getLogger("WorkingCopyDB")

export default function wcLib(wc, options) {
    if (options && options.loglevel) log.setLevel(options.loglevel)
    return {
        async getEverything() {
            return {
                courses: await wc["courses"].toArray(),
                teachers: await wc["teachers"].toArray()
            }
        },
        async getCourses() {
            return await wc["courses"].toArray()
        },
        async getTeachers() {
            return await wc["teachers"].toArray()
        },
        async setHoursForCourse(courseName, teacherIndex, period, hours) {
            // TODO: these functions do not account for data symmetry!
            // (As the data integrity checks performed at sync restore the data symmetry, these functions
            // will still work, but it's worth noting that the functions are incomplete in that regard)
            const path = `teachers.${teacherIndex}.hours.${period}`
            wc.courses.update(courseName, {[path]: hours}).then(updated => {
                if (!updated) throw new Error(`Failed updating ${path} for course ${courseName}!`)
                log.debug(`Updated ${path} for course ${courseName} to ${hours}`)
            })
        },
        async setHoursForTeacher(teacherName, courseIndex, period, hours) {
            // TODO: these functions do not account for data symmetry!
            // (As the data integrity checks performed at sync restore the data symmetry, these functions
            // will still work, but it's worth noting that the functions are incomplete in that regard)
            const path = `courses.${courseIndex}.hours.${period}`
            wc.teachers.update(teacherName, {[path]: hours}).then(updated => {
                if (!updated) throw new Error(`Failed updating ${path} for teacher ${teacherName}!`)
                log.debug(`Updated ${path} for teacher ${teacherName} to ${hours}`)
            })
        },
        async setTeacherForCourse(courseName, teacherName, teacherIndex) {
            // TODO: these functions do not account for data symmetry!
            // (As the data integrity checks performed at sync restore the data symmetry, these functions
            // will still work, but it's worth noting that the functions are incomplete in that regard)
            const path = `teachers.${teacherIndex}`
            wc.courses.update(courseName, {[path]: {name: teacherName, hours: [0, 0, 0, 0]}}).then(updated => {
                if (!updated) throw new Error(`Failed assigning ${teacherName} to ${courseName}!`)
                log.debug(`Assigned ${teacherName} to ${courseName}`)
            })
        },
        async setCourseForTeacher(teacherName, courseName, courseIndex) {
            // TODO: these functions do not account for data symmetry!
            // (As the data integrity checks performed at sync restore the data symmetry, these functions
            // will still work, but it's worth noting that the functions are incomplete in that regard)
            const path = `courses.${courseIndex}`
            wc.courses.update(teacherName, {[path]: {name: courseName, hours: [0, 0, 0, 0]}}).then(updated => {
                if (!updated) throw new Error(`Failed assigning ${courseName} to ${teacherName}!`)
                log.debug(`Assigned ${courseName} to ${teacherName}`)
            })
        },
        async populate(fetchedData) {
            await teachersCoursesPopulate(fetchedData, wc, log)
        }
    }
}
