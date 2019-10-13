import {clientSide} from "gillog"

import {teachersCoursesPopulate} from "./static"

const log = clientSide.getLogger("RemoteCopyDB")

export default function rcLib(rc, options) {
    if (options && options.loglevel) log.setLevel(options.loglevel)
    return {
        async sync(fetchedData, fetchedDataChecksum, latestChecksum) {
            log.debug("Syncing...", {fetchedDataChecksum, latestChecksum})
            if (fetchedDataChecksum === latestChecksum) {
                log.debug("Up to date (checksums matched)")
            } else {
                // TODO: locking down differences
                throw new Error("fetchedDataChecksum did not equal latestChecksum!")
            }
        },
        async populate(fetchedData) {
            await teachersCoursesPopulate(fetchedData, rc, log)
        }
    }
}
