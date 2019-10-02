export default {
    // Remote copy
    rc: {
        name: "arat-rc",
        version: 1,
        stores: [
            {
                name: "courses",
                primaryKey: "name",
                indexes: [
                    "courseCode",
                    "hours",
                    "period",
                    "program"
                ]
            },
            {
                name: "teachers",
                primaryKey: "[firstName+lastName]",
                indexes: []
            }
        ]
    },
    // Working copy
    wc: {
        name: "arat-wc",
        version: 1,
        stores: [
            {
                name: "courses",
                primaryKey: "name",
                indexes: [
                    "courseCode",
                    "hours",
                    "period",
                    "program"
                ]
            },
            {
                name: "teachers",
                primaryKey: "[firstName+lastName]",
                indexes: []
            }
        ]
    },
    // Change sets
    cs: {
        name: "arat-cs",
        version: 1,
        stores: [
            {
                name: "changeSets",
                primaryKey: "++id",
                indexes: [
                    "timestamp",
                    "checksum"
                ]
            }
        ]
    }
}
