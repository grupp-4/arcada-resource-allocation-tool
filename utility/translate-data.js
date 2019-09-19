
function translateData(data) {
    
    const translatedData = {}

    translatedData.courses = translateCourses(data.Program)
    translatedData.teachers = translateTeachers(data.Personal)

    return translatedData
}

function translateCourses(programs) {
    const translatedCourses = []
    Object.keys(programs).forEach(programName => {
        programs[programName].Kurser.forEach(course => {
            const translatedCourse = {
                name: course.namn,
                courseCode: course.kurskod,
                hours: course.timmar,
                period: course.period,
                program: programName
            }
            translatedCourses.push(translatedCourse)
        })
    })
    return translatedCourses
}

function translateTeachers(teachers) {
    const translatedTeachers = []
    teachers.forEach(teacher => {
        const translatedTeacher = {
            firstName: teacher.Förnamn,
            lastName: teacher.Efternamn
        }
        translatedTeachers.push(translatedTeacher)
    })
    return translatedTeachers
}

export default translateData
