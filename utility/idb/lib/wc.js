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
        async populate(fetchedData) {
            await teachersCoursesPopulate(fetchedData, wc, log)
        }
    }
}
