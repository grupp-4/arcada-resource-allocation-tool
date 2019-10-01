function processData(data) {

    const processedData = {}

    processedData.courses = processCourses(data.Program)
    processedData.teachers = processTeachers(data.Personal)

    return processedData

    function processCourses(programs) {
        const processedCourses = []
        Object.keys(programs).forEach(programName => {
            programs[programName].Kurser.forEach(course => {
                const processedCourse = {
                    name: course.namn,
                    courseCode: course.kurskod,
                    hours: course.timmar,
                    period: course.period,
                    program: programName
                }
                processedCourses.push(processedCourse)
            })
        })
        return processedCourses
    }

    function processTeachers(teachers) {
        const processedTeachers = []
        teachers.forEach(teacher => {
            const processedTeacher = {
                firstName: teacher.Förnamn,
                lastName: teacher.Efternamn
            }
            processedTeachers.push(processedTeacher)
        })
        return processedTeachers
    }
}


export default processData
