import {clientSide} from "gillog"
import SHA1 from "crypto-js/sha1"

const log = clientSide.getLogger("ChangeSetsDB")

export default function csLib(cs) {
    return {
        async add(checksum, changes) {
            const timestamp = Date.now()
            await cs["changeSets"].add({timestamp, checksum, changes})
                .then(id => log.debug("Added change set:", {id, timestamp, checksum, changes}))
        },
        async getLatestChecksum() {
            return (await cs["changeSets"].toCollection().last()).checksum
        },
        async populate(fetchedData) {
            this.add(SHA1(fetchedData).toString(), [])
        }
    }
}
