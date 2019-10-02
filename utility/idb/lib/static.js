import SHA1 from "crypto-js/sha1"

export const createStores = function createStores(db, {name, version, stores}, log) {
    let schemas = {}
    stores.forEach(store => {
        let schema = store.primaryKey
        store.indexes.forEach(index => {
            schema += "," + index
        })
        schemas[store.name] = schema
    })
    log.debug(`Defining following schema for "${name}":`, schemas)
    db.version(version).stores(schemas)
}

export const onPopulate = function onPopulate(db, populator, log) {
    db.on("populate", () => {
        log.debug(`Running "populate" event on:`, db.name)
        populator()
    })
}

export const teachersCoursesPopulate = async function teachersCoursesPopulate({courses, teachers}, db, log) {
    await db["courses"].bulkAdd(courses.map(course => ({...course, checksum: SHA1(course).toString()})))
        .then(lastCourse => log.debug("Populated database with courses. Last entry:", lastCourse))
    await db["teachers"].bulkAdd(teachers.map(teacher => ({...teacher, checksum: SHA1(teacher).toString()})))
        .then(lastTeacher => log.debug("Populated database with teachers. Last entry:", lastTeacher))
}

export default {
    createStores,
    onPopulate,
    teachersCoursesPopulate,
}
