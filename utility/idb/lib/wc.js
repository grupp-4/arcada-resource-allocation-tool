import {clientSide} from "gillog"

import {teachersCoursesPopulate} from "./static"

const log = clientSide.getLogger("WorkingCopyDB")

export default function wcLib(wc) {
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
        async setHours(courseName, period, hours) {
            const path = `hours.${period}`;
            wc.courses.update(courseName, {[path]: hours}).then(updated => {
                if (updated) log.debug('Updated course hours');
                else log.debug('setHours failed!');
            })
        },
        async setTeacher(teacherName, courseName) {
            wc.courses.update(courseName, {teacher: teacherName}).then(updated => {
                if (updated) log.debug("Updated course teacher", teacherName, courseName)
                else log.debug("setTeacher failed!")
            })
        },
        async populate(fetchedData) {
            await teachersCoursesPopulate(fetchedData, wc, log)
        }
    }
}
