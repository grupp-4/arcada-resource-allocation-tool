import {clientSide} from "gillog"

import Dexie from "dexie"

import SHA1 from "crypto-js/sha1"

import structure from "./structure"

import {createStores, onPopulate} from "./lib/static"

import csLib from "./lib/cs"
import rcLib from "./lib/rc"
import wcLib from "./lib/wc"

const log = clientSide.getLogger("initIDB")

export default async function initIDB(fetchedData, options) {

    if (options && options.loglevel) log.setLevel(options.loglevel)

    const changeSetsDB = new Dexie(structure.cs.name)
    const remoteCopyDB = new Dexie(structure.rc.name)
    const workingCopyDB = new Dexie(structure.wc.name)

    const changeSets = csLib(changeSetsDB, {loglevel: log.getLevel()})
    const remoteCopy = rcLib(remoteCopyDB, {loglevel: log.getLevel()})
    const workingCopy = wcLib(workingCopyDB, {loglevel: log.getLevel()})

    createStores(changeSetsDB, structure.cs, log)
    createStores(remoteCopyDB, structure.rc, log)
    createStores(workingCopyDB, structure.wc, log)

    onPopulate(changeSetsDB, () => changeSets.populate(fetchedData), log)
    onPopulate(remoteCopyDB, () => remoteCopy.populate(fetchedData), log)
    onPopulate(workingCopyDB, () => workingCopy.populate(fetchedData), log)

    await changeSetsDB.open()
    await remoteCopyDB.open()
    await workingCopyDB.open()

    log.debug("Initialized databases")

    await remoteCopy.sync(fetchedData, SHA1(fetchedData).toString(), await changeSets.getLatestChecksum())

    return [changeSets, remoteCopy, workingCopy]
}
