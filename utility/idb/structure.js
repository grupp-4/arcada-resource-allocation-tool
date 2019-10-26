const changeSetsStore = {
    name: "changeSets",
    primaryKey: "++id",
    indexes: [
        "timestamp",
        "checksum"
    ]
}

const coursesStore = {
    name: "courses",
    primaryKey: "name",
    indexes: [
        "courseCode",
        "hours",
        "period",
        "program"
    ]
}

const teachersStore = {
    name: "teachers",
    primaryKey: "name",
    indexes: []
}

export default {
    // Change sets
    cs: {
        name: "arat-cs",
        version: 1,
        stores: [changeSetsStore]
    },
    // Remote copy
    rc: {
        name: "arat-rc",
        version: 1,
        stores: [coursesStore, teachersStore]
    },
    // Working copy
    wc: {
        name: "arat-wc",
        version: 1,
        stores: [coursesStore, teachersStore]
    }
}
