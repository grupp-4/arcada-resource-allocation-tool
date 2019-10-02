import Dexie from "dexie"

import structure from "./structure"

export default async function drop() {
    for (const key of Object.keys(structure)) {
        const db = structure[key]
        await Dexie.delete(db.name)
    }
}
