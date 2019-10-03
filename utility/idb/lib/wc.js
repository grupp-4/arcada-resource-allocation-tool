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
            // TODO: this function
            throw new Error("Function not implemented!")
        },
        async setTeacher(courseName, teacherName) {
            // TODO: this function
            throw new Error("Function not implemented!")
        },
        async populate(fetchedData) {
            await teachersCoursesPopulate(fetchedData, wc, log)
        }
    }
}
