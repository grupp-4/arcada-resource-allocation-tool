import {clientSide} from "gillog"

import Dexie from "dexie"

import SHA1 from "crypto-js/sha1"

import structure from "./structure"

import {createStores, onPopulate} from "./lib/static"

import csLib from "./lib/cs"
import rcLib from "./lib/rc"
import wcLib from "./lib/wc"

const log = clientSide.getLogger("initIDB")

export default async function initIDB(fetchedData) {

    const csDB = new Dexie(structure.cs.name)
    const rcDB = new Dexie(structure.rc.name)
    const wcDB = new Dexie(structure.wc.name)

    const cs = csLib(csDB)
    const rc = rcLib(rcDB)
    const wc = wcLib(wcDB)

    createStores(csDB, structure.cs, log)
    createStores(rcDB, structure.rc, log)
    createStores(wcDB, structure.wc, log)

    onPopulate(csDB, () => cs.populate(fetchedData), log)
    onPopulate(rcDB, () => rc.populate(fetchedData), log)
    onPopulate(wcDB, () => wc.populate(fetchedData), log)

    await csDB.open()
    await rcDB.open()
    await wcDB.open()

    log.debug("Initialized databases.")

    await rc.sync(fetchedData, SHA1(fetchedData).toString(), await cs.getLatestChecksum())

    return [cs, rc, wc]
}
