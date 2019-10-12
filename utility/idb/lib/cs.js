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
        async getLatestTimestamp() {
            return (await cs["changeSets"].toCollection().last()).timestamp
        },
        async getLatestChecksum() {
            return (await cs["changeSets"].toCollection().last()).checksum
        },
        async getADozenChanges() {
            log.debug("Getting a dozen changes...")
            let accumulator = 0
            const changeSets = await cs["changeSets"].reverse().until(item => {
                accumulator += item.changes.length
                return accumulator >= 20
            }).toArray()
            log.debug(`Iterated over ${changeSets.length} change sets and collected ${accumulator} changes`)
            const dozenChanges = []
            for (const changeSet of changeSets) {
                const length = dozenChanges.length
                if (length >= 20) break
                dozenChanges.push(...changeSet.changes.slice(0, 20 - dozenChanges.length))
            }
            log.debug(`Returning ${dozenChanges.length} changes...`)
            return dozenChanges
        },
        async populate(fetchedData) {
            this.add(SHA1(fetchedData).toString(), [])
        }
    }
}
